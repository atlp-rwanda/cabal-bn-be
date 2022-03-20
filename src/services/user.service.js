import { User } from 'database/models';

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

    if (!userExist) {
      throw 'User not found in database';
    }
    return userExist;
  }

  async getUserId(id) {
    return User.findOne({ where: { id } });
  }
  async getUser(email) {
    return User.findOne({ where: { email } });
  }
}
