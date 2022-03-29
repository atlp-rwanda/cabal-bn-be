/* eslint-disable import/no-named-as-default-member */
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
      const multiCityTrip = await tripService.multiCityCreate(
        req.user.id,
        req.user.manager_id,
        req.body
      );

      return res.status(201).json({
        status: 201,
        message: 'Trip created successfully ',
        data: multiCityTrip
      });
    } catch (err) {
      console.log(err);
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
      await tripService.updateStatus(req.params.id, req.body.status);
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
