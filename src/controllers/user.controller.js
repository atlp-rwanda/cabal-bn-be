/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import UserService from 'services/user.service';
import {
  generateToken,
  hashPassword,
  comparePassword
} from 'helpers/user.helpers';

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(data, res) {
    try {
      data.password = hashPassword(data.password);
      data.role_id = 4;
      const newUser = await this.userService.createUser(data, res);

      const token = generateToken({ email: newUser.email }, '7d');
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

  async userLogin(req, res) {
    try {
      const user = await this.userService.userLogin(req.body.email, res);
      const validation = await comparePassword(
        req.body.password,
        user.password
      );
      if (validation) {
        const token = await generateToken({ email: user.email }, '1d');
        return res
          .status(201)
          .header('authenticate', token)
          .json({ message: 'Logged in successfully', token: token });
      }
      return res.status(401).json({ message: 'Invalid password' });
    } catch (error) {
      return res.status(404).json({
        message: 'Error occured while logging in',
        error: error
      });
    }
  }

  async Logout(req, res) {
    try {
      const user = await this.userService.userLogout(
        req.headers.authorization.split(' ')[1]
      );
      return res
        .status(200)
        .json({ message: 'You are logged out', email: user.email });
    } catch (error) {
      return res.status(404).json({ error: error, message: 'not found' });
    }
  }
}
