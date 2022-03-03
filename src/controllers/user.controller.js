/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import UserService from 'services/user.service';
import { generateToken, hashPassword } from 'helpers/user.helpers';

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(data, res) {
    console.log('runned');
    try {
      data.password = hashPassword(data.password);
      const newUser = await this.userService.createUser(data, res);

      const token = generateToken(newUser.email, '7d');
      res.status(201).json({ message: 'user registered successfully', token });
    } catch (error) {
      res.status(409).json({
        message:
          (error.message && error.message.replace(/['"`]+/gi, '')) ||
          'user not created'
      });
    }
  }
}
