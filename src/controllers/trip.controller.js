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
      return res.status(500).json({
        message: 'An unexpected error occurred',
        error: err.message.replace(/['"`]/g, '')
      });
    }
  }

  static async userUpdateTrip(req, res) {
    try {
      const updated = await tripService.updateTrip(req.params.id, req.body);

      return res.status(200).json({
        status: 200,
        message: 'Trip updated successfully',
        data: updated
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
}
export default tripController;
