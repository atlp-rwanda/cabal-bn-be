/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import UserService from 'services/user.service';
import {
  generateToken,
  hashPassword,
  comparePassword,
  decodeToken
} from 'helpers/user.helpers';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import { verifyEmail } from '../helpers/user.verify';

dotenv.config();

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(data, res) {

    try {
      data.password = hashPassword(data.password);
      data.role_id = 4;

      const newUser = await this.userService.createUser(data, res);

      const token = generateToken({ id: newUser.id }, '30m');

      const msg = {
        from: {
          name: 'Cabal Barefoot Nomad',
          email: process.env.FROM_EMAIL
        },
        to: newUser.email,
        subject: 'Email Verification',
        text: `
        Hello, thanks for registering on Barefoot Nomad site.
        Please copy and paste the address below into address bar to verify your account.
        ${process.env.BASE_URL}/api/v1/users/verify-email/${token}
        `,
        html: verifyEmail(token)
      };
      sgMail
        .send(msg)
        .then(res, () => {
          return res
            .status(200)
            .json({
              status: 200,
              message:
                'Account created! Please check your email for verification.',
              data: newUser,
            });
        })
        .catch((err) => {
          console.log(err);
        });
      return res
        .status(200)
        .json({
          status: 200,
          message: 'Account created! Please check your email for verification.',
          data: newUser,
          tempToken:token
        });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating a user',
        error:
          (error.message && error.message.replace(/['"`]+/gi, '')) ||
          'user not created'
      });
    }
  }

  async verifyNewUser(req, res) {
    
      try {
        const {token} = req.params;

        const userInfo = decodeToken(token);

        const userId = userInfo.id;

        const user = await this.userService.getUserId(userId);

        user.update({ isVerified: true }, { where: { id: userId } });
        return res
          .status(200)
          .send({  message: 'Account verified!' });
      } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message });
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
        if(!user.isVerified){
          return res.status(400).json({message: "Please verify your email to login!"});
        }
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
}
