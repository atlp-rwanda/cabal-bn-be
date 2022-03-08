/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { User } from 'database/models';

export default class UserService {
  async createUser(data) {
    const newUser = await User.create(data);
    return newUser;
  }
}
