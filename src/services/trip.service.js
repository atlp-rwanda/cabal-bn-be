/* eslint-disable object-shorthand */
/* eslint-disable require-jsdoc */
import { Trip, User } from '../database/models';

class tripService {
  static async createTrip(userId, managerId, data) {
    return Trip.create({ ...data, user_id: userId, manager_id: managerId });
  }

  static async updateTrip(userId, id, data) {
    const exist = await Trip.findOne({
      where: {
        user_id: userId,
        id
      }
    });

    exist.origin = data.origin || exist.origin;
    exist.destination = data.destination || exist.destination;
    exist.reason = data.reason || exist.reason;
    exist.returnDate = data.returnDate || exist.returnDate;
    exist.tripDate = data.tripDate || exist.tripDate;

    return exist;
  }

  static async findSpecificTrip(userId, limit = 3, offset = 0) {
    const foundOneTrip = await Trip.findAndCountAll({
      where: { user_id: userId },
      limit,
      offset,
      include: [
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
        }
      ]
    });
    return foundOneTrip;
  }

  static async managerFindAllTrip(managerId, limit = 3, offset = 0) {
    const foundAllTrip = await Trip.findAndCountAll({
      where: { manager_id: managerId },
      limit,
      offset,
      include: [
        {
          model: User,
          as: 'manager',
          attributes: [
            'id',
            'manager_id',
            'first_name',
            'last_name',
            'email',
            'provider'
          ]
        }
      ]
    });
    return foundAllTrip;
  }

  static async deleteTrip(userId, id) {
    const deleteTrip = await Trip.destroy({
      where: {
        status: 'PENDING',
        user_id: userId,
        id
      }
    });
    return deleteTrip;
  }
}
export default tripService;
