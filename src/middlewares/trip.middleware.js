/* eslint-disable camelcase */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */

import { validateDate } from '../helpers/dataComparison';
import accommodationService from '../services/accommodations.service';
import tripService from '../services/trip.service';
import { Trip, User, Location, Role, Accommodation } from '../database/models';

export const checkTripExistStatus = (status) => (req, res, next) => {
    tripService
        .findSpecificTrip(req.user.id, 10, 0, req.user.Role.name)
        .then((trips) => {
            for (let i = 0; i < trips.rows.length; i++) {
                const trip = trips.rows[i];

                if (trip.id === parseInt(req.params.id)) {
                    if (trip.status === status) {
                        return next();
                    }

                    return res.status(400).json({
                        message: `Trip request should be in pending to perform this request`
                    });
                }
            }

            return res.status(404).json({ message: 'No trip with that Id found' });
        });
};

export const checkTripDates = (req, res, next) => {
    const compareDates = validateDate(req.body.returnDate, req.body.tripDate);
    if (!compareDates) {
        return res.status(400).json({
            status: 400,
            message: 'Trip date is greater than or equal to the return date'
        });
    }

    next();
};

export const checkLocationAccommodation = async(req, res, next) => {
    const { accommodation_id, arrival_location_id } = req.body;
    const accommodation = await accommodationService.findSpecificAccommodation(
        accommodation_id
    );

    if (accommodation.location_id !== parseInt(arrival_location_id)) {
        return res.status(400).json({
            message: `The location and accommodation doesn't match, The accomodation passed has location of id ${accommodation.location_id}`
        });
    }

    next();
};

export const checkTripIdExist = async(req, res, next) => {
    const tripId = req.params.id;
    const tripExist = await Trip.findByPk(tripId);
    if (!tripExist) {
        return res.status(404).json({ message: 'No trip with that Id found' });
    }
    req.trip = tripExist;
    next();
}

export const checkManagerId = async(req, res, next) => {
    const trip = req.trip;
    if (trip.manager_id == req.user.id || req.user.Role.name == 'SUPER_ADMIN') {
        return next();
    }
    console.log(trip.manager_id, req.user.id);
    return res.status(404).json({ message: 'No manager with that Id found' });


};