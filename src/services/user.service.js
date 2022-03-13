/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { User } from 'database/models';
import { decodeToken } from '../helpers/user.helpers';

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
      userExist.Logged_in = true;
      userExist.save();
      return userExist;
    }
    return res.status(404).json({ message: 'User not found in database' });
  }

  async userLogout(accessToken) {
    const token = await decodeToken(accessToken);
    const email = token.email;
    const user = await User.findOne({
      where: {
        email: email
      }
    });
    return user;
  }

  async getUser(email) {
    return User.findOne({ where: { email } });
  }
}
