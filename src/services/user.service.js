/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { User } from 'database/models';

export default class UserService {
  async createUser(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw new Error(
        (error.errors &&
          error.errors[0].message &&
          error.errors[0].message.replace(/["'`]+/g, '')) ||
          'An unexpected error occurred'
      );
    }
  }
}
