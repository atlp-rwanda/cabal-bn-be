/* eslint-disable radix */
/* eslint-disable curly */
/* eslint-disable require-jsdoc */
import tripService from '../services/trip.service';
import { getQuery } from '../helpers/trip.helpers';
import { getPaginatedData, getPagination } from '../utils/pagination.utils';

class tripController {
  static async findTrip(req, res) {
    try {
      const { page, limit } = getQuery(req);
      const { newLimit, offset } = getPagination(page, limit);
      const show = await tripService.findSpecificTrip(
        req.user.id,
        newLimit,
        offset
      );

      return res.status(200).json({
        message: 'Trip retrieved Successfully',
        data: getPaginatedData(show, page, limit)
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async managerFindTrip(req, res) {
    try {
      const { page, limit } = getQuery(req);
      const { newLimit, offset } = getPagination(page, limit);

      const managerFind = await tripService.managerFindAllTrip(
        req.user.id,
        newLimit,
        offset
      );
      if (!managerFind) {
        return res
          .status(404)
          .json({ message: 'Manager with this Id not found' });
      }

      return res.status(200).json({
        message: 'Trip retrieved Successfully',
        data: getPaginatedData(managerFind, page, limit)
      });
    } catch (err) {
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async createTrip(req, res) {
    try {
      if (!req.user.manager_id) {
        return res.status(400).json({
          message: 'Access denied, You are not assigned a manager'
        });
      }

      const tripCreated = await tripService.createTrip(
        req.user.id,
        req.user.manager_id,
        req.body
      );

      return res.status(201).json({
        message: 'Trip created successfully ',
        data: tripCreated
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async userUpdateTrip(req, res) {
    try {
      const updated = await tripService.updateTrip(
        req.user.id,
        req.params.id,
        req.body
      );

      return res.status(200).json({
        status: 200,
        message: 'Trip updated successfully',
        data: updated
      });
    } catch (error) {
      res.status(500).json({
        message: 'Internal server Error',
        error
      });
    }
  }

  static async deleteTrip(req, res) {
    try {
      const deletedTrip = await tripService.deleteTrip(
        req.user.id,
        parseInt(req.params.id)
      );

      return res
        .status(200)
        .json({ message: 'Trip deleted successfully', deletedTrip });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'internal server error', err });
    }
  }
}
export default tripController;