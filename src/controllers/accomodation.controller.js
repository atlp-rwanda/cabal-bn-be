/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable curly */
/* eslint-disable require-jsdoc */
// eslint-disable-next-line import/no-unresolved
import { Op } from 'sequelize';
import accommodationService from '../services/accommodations.service';
import { decodeToken } from '../helpers/user.helpers';
import { getPagination, getPaginatedData } from '../utils/pagination.utils';

class accommodationController {
  static async createAccommodation(req, res) {
    try {
      const user = req.headers;
      const token = req.headers.authorization.split(' ')[1];
      const verify = await decodeToken(token);
      if (!user) return res.status(200).json({ message: 'there is no user' });
      // if (decodedToken) return res.status(200).json({ message: 'this is it' });
      const { name } = req.query;
      const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
      const searchAccommodation =
        await accommodationService.findAllAccommodations({ where: condition });
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < searchAccommodation.rows.length - 1; i++) {
        if (
          searchAccommodation.rows[i].location_id ==
            req.accommodations.value.location_id &&
          searchAccommodation.rows[i].name == req.accommodations.value.name
        ) {
          return res.status(400).json({
            message:
              'could not create an accommodation of the same name and same location.'
          });
        }
      }

      const data = {
        ...req.accommodations.value,
        user_id: verify.userId
      };
      const accommodationCreated =
        await accommodationService.createAccommodation(data);
      return res.status(200).json({
        message: 'successfully created an Accommodation',
        data: accommodationCreated
      });
    } catch (err) {
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async findAllAccommodations(req, res) {
    try {
      const { offset, newLimit } = getPagination(
        req.query.page,
        req.query.limit
      );
      const { name } = req.query;
      const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
      const foundAccommodations =
        await accommodationService.findAllAccommodations({
          where: condition,
          offset,
          newLimit
        });
      const response = getPaginatedData(
        foundAccommodations,
        req.query.page,
        newLimit
      );
      return res.status(200).json({
        message: 'successfully found all available accommodations',
        data: response
      });
    } catch (err) {
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async findAccommodation(req, res) {
    try {
      const foundAccommodation = req.accommodation.dataValues;
      res
        .status(200)
        .json({ message: 'Accommodation found', data: foundAccommodation });
    } catch (err) {
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async updateAccommodation(req, res) {
    try {
      const dataUpdate = {
        ...req.accommodations.value
      };
      const accommodationId = req.accommodation.dataValues.id;
      await accommodationService.updateSpecificAccommodation(
        { where: { id: accommodationId } },
        dataUpdate
      );

      const updatedAccommodation =
        await accommodationService.findSpecificAccommodation(accommodationId);
      return res
        .status(200)
        .json({ message: 'Accommodation Updated', updatedAccommodation });
    } catch (err) {
      return res.status(500).json({ message: 'internal server error', err });
    }
  }

  static async destroyAccommodation(req, res) {
    try {
      const foundAccommodation = req.accommodation.dataValues;
      const accommodationId = foundAccommodation.id;
      await accommodationService.destroyAccommodation({
        where: { id: accommodationId }
      });
      return res.status(200).json({ message: 'accommodation removed' });
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  }
}
export default accommodationController;
