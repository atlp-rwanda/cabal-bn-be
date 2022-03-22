/* eslint-disable no-return-await */
/* eslint-disable require-jsdoc */
import { tripComments } from '../database/models';

class tripCommentsServices {
  static async createComment(data) {
    return await tripComments.create(data);
  }

  static async findTripComments() {
    return await tripComments.findAll();
  }

  static async findSpecificComment(commentId) {
    return await tripComments.findByPk(commentId);
  }

  static async editComment({ where }, commentUpdate) {
    return await tripComments.update(commentUpdate, {
      where,
      returning: true,
      raw: true
    });
  }

  static async removeComment({ where }) {
    return await tripComments.destroy({ where });
  }
}
export default tripCommentsServices;
