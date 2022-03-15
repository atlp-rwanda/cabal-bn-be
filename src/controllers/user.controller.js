/* eslint-disable class-methods-use-this */
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

  async createUser(req, res) {
    try {
      const data = req.body;
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
          .json({ message: 'Logged in successfully', token });
      }
      return res.status(401).json({ message: 'Invalid password' });
    } catch (error) {
      return res.status(404).json({
        message: 'Error occured while logging in',
        error
      });
    }
  }

  async googleLogin(req, res) {
    const { email, id } = req.user;
    const token = generateToken({ email, id }, '7d');

    return res.status(200).json({
      message: 'Logged in successfully',
      data: req.user,
      token
    });
  }

  async facebookLogin(req, res) {
    const { email, id } = req.user;
    const token = generateToken({ email, id }, '7d');

    return res.status(200).json({
      message: 'Logged in successfully',
      data: req.user,
      token
    });
  }
}
