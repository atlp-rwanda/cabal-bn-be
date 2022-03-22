/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { decodeToken } from '../helpers/user.helpers';
import { Blacklist } from '../database/models';
import { User, Profile } from 'database/models';

export default class UserService {
  async createUser(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async userExist(email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return user;
    }
    return false;
  }

  async userLogin(data, res) {
    const userExist = await User.findOne({
      where: { email: data }
    });

    return userExist;
  }

  async getUserId(id) {
    return User.findOne({ where: { id } });
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

    await Blacklist.create({ token: accessToken });

    return user;
  }
  async getUserwithProfile(email) {
    return User.findOne({
      where: { email },
      include: {
        model: Profile,
        as: "profile"
      }
    });
  }

  async updateUser(data, id) {
    return User.update(data, {
      where: {
        id
      },
      returning: true
    })
  }
}
