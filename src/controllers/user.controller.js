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

      const token = generateToken({ email: newUser.email }, '1d');
      return res
        .status(201)
        .json({ message: 'user registered successfully', token });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating a user',
        error: error.message
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
    try {
      const profile = req.user;

      let user = await new UserService().getUser(profile.emails[0].value);

      if (!user) {
        user = await new UserService().createUser({
          email: profile.emails && profile.emails[0].value,
          password: null,
          role_id: 4,
          first_name: profile.name && profile.name.familyName,
          last_name:
            profile.name &&
            [profile.name.middleName, profile.name.givenName].join(' '),
          profile_picture: profile.photos && profile.photos[0].value,
          provider: 'GOOGLE'
        });
      }

      const token = generateToken({ email: user.email, id: user.id }, '1d');

      return res.status(200).json({
        status: 200,
        message: 'Logged in successfully',
        token
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while logging in',
        data: error.message
      });
    }
  }

  async facebookLogin(req, res) {
    try {
      const profile = req.user;

      let user = await new UserService().getUser(profile.emails[0].value);

      if (!user) {
        user = await new UserService().createUser({
          email: profile.emails && profile.emails[0].value,
          password: null,
          role_id: 4,
          first_name: profile.name && profile.name.familyName,
          last_name:
            profile.name &&
            [profile.name.middleName, profile.name.givenName].join(' '),
          profile_picture: profile.photos && profile.photos[0].value,
          provider: 'FACEBOOK'
        });
      }

      const token = generateToken({ email: user.email, id: user.id }, '1d');

      return res.status(200).json({
        status: 200,
        message: 'Logged in successfully',
        token
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while logging in',
        data: error.message
      });
    }
  }
}
