/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable radix */
/* eslint-disable curly */
/* eslint-disable require-jsdoc */
import dotenv from "dotenv"
import tripService from '../services/trip.service';
import { getQuery } from '../helpers/trip.helpers';
import { getPaginatedData, getPagination } from '../utils/pagination.utils';
import UserService from '../services/user.service';
import Notification from '../services/notification.service';
import eventEmitter from '../services/event.service';

dotenv.config()
class tripController {
    static async findTrip(req, res) {
        try {
            const { page, limit } = getQuery(req);
            const { newLimit, offset } = getPagination(page, limit);
            const show = await tripService.findSpecificTrip(
                req.user.id,
                newLimit,
                offset,
                req.user.Role.dataValues.name
            );

            return res.status(200).json({
                message: 'Trip retrieved Successfully',
                data: getPaginatedData(show, page, limit)
            });
        } catch (err) {
            return res.status(500).json({
                message: 'An unexpected error occurred',
                error: err.message.replace(/['"`]/g, '')
            });
        }
    }

    static async createTrip(req, res) {
        try {
            const multiCityTrip = await tripService.multiCityCreate(
                req.user.id,
                req.user.manager_id,
                req.body
            );

            const manager = await new UserService().getUserId(req.user.manager_id)
            const notify = await Notification.createNotification({
                details: `Requester ${req.user.first_name} ${req.user.last_name} has made a trip request`,
                type: "trip",
                from_user_id: req.user.id,
                to_user_id: manager.id
            })
            if (manager.email_notification == true) {
                let title = "Trip Requested"
                let description = "has created a trip."
                let url = {
                    baseUrl: process.env.BASE_URL,
                    route: process.env.TRIP_URL
                }
                eventEmitter.emit("tripEmailNotification", { user: req.user, multiCityTrip, manager, title, description, url })
            }
            if (manager.in_app_notification == true) {
                eventEmitter.emit("appNotification", { recipient: manager, notify })
            }

            return res.status(201).json({
                status: 201,
                message: 'Trip created successfully ',
                data: multiCityTrip
            });
        } catch (err) {
            return res.status(500).json({
                message: 'An unexpected error occurred',
                error: err.message.replace(/['"`]/g, '')
            });
        }
    }

    static async userUpdateTrip(req, res) {
        try {
            const multiCityTrip = await tripService.updateMultiCity(
                req.params.id,
                req.body
            );

            const manager = await new UserService().getUserId(req.user.manager_id)
            const notify = await Notification.createNotification({
                details: `Requester ${req.user.first_name} ${req.user.last_name} has updated their trip request`,
                type: "trip",
                from_user_id: req.user.id,
                to_user_id: manager.id
            })
            if (manager.email_notification == true) {
                let title = "Trip updated"
                let description = "has updated their trip request."
                let url = {
                    baseUrl: process.env.BASE_URL,
                    route: process.env.TRIP_URL
                }
                eventEmitter.emit("tripEmailNotification", { user: req.user, multiCityTrip: multiCityTrip[1][0], manager, title, description, url })
            }
            if (manager.in_app_notification == true) {
                eventEmitter.emit("appNotification", { recipient: manager, notify })
            }
            return res.status(200).json({
                status: 200,
                message: 'Updating trip done successfully ',
                data: multiCityTrip
            });

        } catch (error) {
            /* istanbul ignore next */
            return res.status(500).json({
                message: 'An unexpected error occurred',
                error: error.message.replace(/['"`]/g, '')
            });
        }
    }

    static async deleteTrip(req, res) {
        try {
            const deletedTrip = await tripService.deleteTrip(parseInt(req.params.id));
            const manager = await new UserService().getUserId(req.user.manager_id)
            const notify = await Notification.createNotification({
                details: `Requester ${req.user.first_name} ${req.user.last_name} has deleted their trip request`,
                type: "trip",
                from_user_id: manager.id,
                to_user_id: req.user.id
            })
            if (manager.in_app_notification == true) {
                eventEmitter.emit("appNotification", { recipient: manager, notify })
            }
            return res
                .status(200)
                .json({ message: 'Trip deleted successfully', deletedTrip });
        } catch (err) {
            /* istanbul ignore next */
            return res.status(500).json({
                message: 'An unexpected error occurred',
                error: err.message.replace(/['"`]/g, '')
            });
        }
    }

    static async updateStatus(req, res) {
        try {
            const updateStatus = await tripService.updateStatus(
                req.params.id,
                req.body.status
            );
            const user = await new UserService().getUserId(updateStatus[1][0].user_id)
            const notify = await Notification.createNotification({
                details: `Manager ${req.user.first_name} ${req.user.last_name} has ${updateStatus[1][0].status} your trip request`,
                type: "trip",
                from_user_id: req.user.id,
                to_user_id: user.id
            })
            if (user.email_notification == true) {
                let url = {
                    baseUrl: process.env.BASE_URL,
                    route: process.env.TRIP_URL
                }
                eventEmitter.emit("tripStatusEmailNotification", { user, manager: req.user, trip: updateStatus[1][0], url })
            }

            if (user.in_app_notification == true) {
                eventEmitter.emit("appNotification", { recipient: user, notify })
            }
            const { arrival_location, status } = updateStatus[1][0];
            if (status === 'APPROVED') {
                /* istanbul ignore next */
                eventEmitter.emit('tripRequestApproved', arrival_location);
            }
            return res.status(200).json({
                message: 'Trip updated successfully'
            });
        } catch (err) {
            /* istanbul ignore next */
            return res.status(500).json({
                message: 'An unexpected error occurred',
                error: err.message.replace(/['"`]/g, '')
            });
        }
    }

    static async findTripById(req, res) {
        try {
            const trip = await tripService.findSpecificTripById(req.params.id);
            if (!trip)
                return res.status(401).json({ message: 'this trip dont exist' });
            return res.status(200).json({ trip });
        } catch (error) {
            /* istanbul ignore next */
            return res.status(500).json({ error: error.message });
        }
    }
}
export default tripController;
