/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { User } from 'database/models';
import { decodeToken } from '../helpers/user.helpers';
import client from '../redis';

export default class UserService {
  async createUser(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async userLogin(data, res) {
    const userExist = await User.findOne({
      where: { email: data }
    });

    if (userExist) {
      return userExist;
    }
    return res.status(404).json({ message: 'User not found in database' });
  }

  async getUser(email) {
    return User.findOne({ where: { email } });
  }

  async userLogout(accessToken) {
    const token = await decodeToken(accessToken);
    const { email } = token;
    const user = await User.findOne({
      where: {
        email
      }
    });

    client.setEx(`${accessToken}`, 3600, JSON.stringify(user.email));

    return user;
  }
}
