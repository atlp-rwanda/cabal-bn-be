/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import { Accommodation, Room, Like } from '../database/models';
import { formatLikeOne, formatLikeMany } from '../helpers/accommodation.hepler';

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
      order: order || [['id', 'ASC']],
      include: [{ model: Like, attributes: ['user_id', 'like'] }]
    });
    return formatLikeMany(foundAccommodations);
  }

  static async findSpecificAccommodation(id) {
    const foundOneAccommodation = await Accommodation.findByPk(id, {
      include: [
        { model: Room, as: 'Rooms' },
        { model: Like, attributes: ['user_id', 'like'] }
      ]
    });
    return formatLikeOne(foundOneAccommodation);
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

  static async createLike(user_id, accommodation_id) {
    let likeData = await Like.findOne({ where: { user_id, accommodation_id } });

    if (!likeData) {
      likeData = await Like.create({
        user_id,
        accommodation_id,
        like: true
      });
    } else if (!likeData.like) {
      likeData.like = true;
    } else {
      likeData.like = null;
    }
    await likeData.save();

    return likeData;
  }
}
export default accommodationService;
