/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import { Accommodation, Room } from '../database/models';

class accommodationService {
  static async createAccommodation(accommodation) {
    const accommodationsCreate = await Accommodation.create(accommodation);
    return accommodationsCreate;
  }

  static async findAllAccommodations({ where, offset, limit, order }) {
    const foundAccommodations = await Accommodation.findAndCountAll({
      where,
      offset,
      limit,
      order: order || [['createdAt', 'DESC']]
    });
    return foundAccommodations;
  }

  static async findSpecificAccommodation(id) {
    const foundOneAccommodation = await Accommodation.findByPk(id, {
      include: [{ model: Room, as: 'Rooms' }]
    });
    return foundOneAccommodation;
  }

  static async updateSpecificAccommodation({ where, id }, dataUpdate) {
    const updateAccommodaton = await Accommodation.update(dataUpdate, {
      where: id ? { id } : where,
      returning: true,
      raw: true
    });
    return updateAccommodaton;
  }

  static async destroyAccommodation({ where }) {
    const destroyAccommodation = await Accommodation.destroy({ where });
    return destroyAccommodation;
  }
}
export default accommodationService;
