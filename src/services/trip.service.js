/* eslint-disable import/order */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-await */
/* eslint-disable no-await-in-loop */
/* eslint-disable spaced-comment */
/* eslint-disable object-shorthand */
/* eslint-disable require-jsdoc */
import { Op } from 'sequelize';
import { Trip, User, Location, Role, Accommodation } from '../database/models';

class tripService {
  static async findSpecificTrip(userId, limit, offset) {
    let foundOneTrip;

    const userRole = await Role.findOne({ where: { id: userId } });
    const includes = [
      {
        model: User,
        as: 'user',
        attributes: [
          'id',
          'first_name',
          'last_name',
          'email',
          'provider',
          'manager_id'
        ]
      },
      {
        model: Location,
        as: 'location',
        attributes: ['id', 'name', 'latitude', 'longitude', 'country']
      },
      {
        model: Location,
        as: 'depart_location',
        attributes: ['id', 'name', 'latitude', 'longitude', 'country']
      },
      {
        model: Accommodation,
        attributes: ['id', 'name', 'services', 'amenities', 'imagesId']
      }
    ];

    if (userRole.name === 'SUPER_ADMIN') {
      foundOneTrip = await Trip.findAndCountAll({
        limit,
        offset,
        include: includes
      });
    } else {
      foundOneTrip = await Trip.findAndCountAll({
        where: { user_id: userId },
        limit,
        offset,
        include: includes
      });
    }

    return foundOneTrip;
  }

  static async deleteTrip(id) {
    const deleteTrip = await Trip.destroy({
      where: {
        status: 'PENDING',
        id
      }
    });
    return deleteTrip;
  }

  static async findSpecificTripById(tripId) {
    return await Trip.findByPk(tripId);
  }

  static async updateStatus(id, status) {
    const updateStatus = await Trip.update({ status }, { where: { id } });
    return updateStatus;
  }

  static async multiCityCreate(userId, managerId, data) {
    data.user_id = userId;
    data.manager_id = managerId;
    const request = await Trip.create(data);
    return request;
  }

  static async updateMultiCity(id, data) {
    const exist = await Trip.findOne({
      where: { id }
    });
    exist.depart_location_id =
      data.depart_location_id || exist.depart_location_id;

    exist.arrival_location = data.arrival_location || exist.arrival_location;

    exist.reason = data.reason || exist.reason;
    exist.returnDate = data.returnDate || exist.returnDate;
    exist.tripDate = data.tripDate || exist.tripDate;

    const updated = await Trip.update(data, {
      where: { id },
      returning: true,
      raw: true
    });
    return updated;
  }
}
export default tripService;
