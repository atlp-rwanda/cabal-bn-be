/* eslint-disable no-return-await */
/* eslint-disable require-jsdoc */
import { Location, Accommodation } from '../database/models';

class locationService {
  static async createLocation(location) {
    return await Location.create(location);
  }

  static async listAllLocation({ where, offset, limit, order }) {
    return await Location.findAndCountAll({
      where,
      offset,
      limit,
      order: order || [['createdAt', 'DESC']]
    });
  }

  static async findLocation(id) {
    return await Location.findOne(
      { where: { id } },
      {
        include: [{ model: Accommodation, as: 'Accommodations' }]
      }
    );
  }

  static async removeLocation({ where }) {
    return await Location.destroy({ where });
  }
}

export default locationService;