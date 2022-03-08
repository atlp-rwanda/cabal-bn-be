/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import UserService from 'services/user.service';
import { generateToken, hashPassword } from 'helpers/user.helpers';

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(data, res) {
    try {
      data.password = hashPassword(data.password);
      const newUser = await this.userService.createUser(data, res);

      const token = generateToken(newUser.email, '7d');
      return res
        .status(201)
        .json({ message: 'user registered successfully', token });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating a user',
        error:
          (error.message && error.message.replace(/['"`]+/gi, '')) ||
          'user not created'
      });
    }
  }
}
