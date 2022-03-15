/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { User } from 'database/models';

export default class UserService {
  async createUser(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async userLogin(data, res) {
    const userExist = await User.findOne({
      where: { email: data }
    })

    if (userExist) {
      return userExist
    }
    return res.status(404).json({ message: "User not found in database" })
  }

  async getUserId(id) {
    return User.findOne({ where: { id } });
  }

  async getUser(email) {
    return User.findOne({ where: { email } });
  }
}
