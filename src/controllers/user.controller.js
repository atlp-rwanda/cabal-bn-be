/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import bcryptjs from 'bcryptjs';
import sgMail from '@sendgrid/mail';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import { confirmEmail } from '../utils/email.utils';
import UserService from '../services/user.service';
import { User } from '../database/models';
import {
  generateToken,
  hashPassword,
  comparePassword
} from '../helpers/user.helpers';

config();

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
        const token = await generateToken(
          { email: user.email, userId: user.id },
          '1d'
        );
        return res
          .status(201)
          .header('authenticate', token)
          .json({ message: 'Logged in successfully', token });
      }
      return res.status(400).json({ message: 'Invalid password' });
    } catch (error) {
      return res.status(404).json({
        message: 'Error occured while logging in',
        error
      });
    }
  }
  static async forgot(req, res) {
    const exist = await new UserService().userExist(req.body.email);

    if (exist.email) {
      const tokenid = generateToken({ id: exist.id }, '10m');
      const message = {
        to: exist.email,
        from: {
          name: process.env.EMAIL_NAME,
          email: process.env.FROM_EMAIL
        },
        subject: 'reset password',
        text: 'request for reset password',
        html: confirmEmail(tokenid)
      };
      sgMail
        .send(message)
        .then((response) => {
          res.status(200).json({
            status: 200,
            message: 'Password reset link has been sent to your email'
          });
        })
        .catch((error) =>
          res.status(500).json({ message: 'internal server error', error })
        );
    } else {
      res.status(404).json({ status: 404, message: 'Email has not found' });
    }
  }
  static async reset(req, res) {
    try {
      const { password } = req.body;
      const { token } = req.params;
      const userInfo = jwt.verify(token, process.env.SECRETE);
      const userId = userInfo.id;
      const newPassword = await bcryptjs.hash(password, 10);
      User.update({ password: newPassword }, { where: { id: userId } });
      return res
        .status(200)
        .send({ message: 'Your new password has been set Return to Login' });
    } catch (error) {
      return res.status(500).send({ message: error.message });
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
