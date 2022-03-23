/* eslint-disable object-shorthand */
/* eslint-disable require-jsdoc */
import { Trip, User, Location, Accommodation } from '../database/models';

class tripService {
  static async createTrip(userId, managerId, data) {
    return Trip.create({ ...data, user_id: userId, manager_id: managerId });
  }

  static async updateTrip(id, data) {
    const exist = await Trip.findOne({
      where: {
        id
      }
    });

    exist.depart_location_id = data.depart_location_id;
    exist.arrival_location_id = data.arrival_location_id;
    exist.accommodation_id = data.accommodation_id;
    exist.reason = data.reason;
    exist.returnDate = data.returnDate;
    exist.tripDate = data.tripDate;

    return exist;
  }

  static async findSpecificTrip(userId, limit, offset, roleName) {
    let foundOneTrip;

    const includes = [
      {
        model: User,
        as: roleName === 'MANAGER' ? 'manager' : 'user',
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
        as: 'arrival_location',
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

    if (roleName === 'MANAGER') {
      foundOneTrip = await Trip.findAndCountAll({
        where: { manager_id: userId },
        limit,
        offset,
        include: includes
      });
    } else if (roleName === 'REQUESTER') {
      foundOneTrip = await Trip.findAndCountAll({
        where: { user_id: userId },
        limit,
        offset,
        include: includes
      });
    } else {
      foundOneTrip = await Trip.findAndCountAll({
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
}
export default tripService;
