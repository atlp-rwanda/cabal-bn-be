/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import { User } from 'database/models';
import { decodeToken } from '../helpers/user.helpers';

export const authentication = async (req, res, next) => {
  try {
    const token = await decodeToken(req.headers.authorization.split(' ')[1]);
    const email = token.email;
    const user = await User.findOne({ where: { email: email } });
    if (user.Logged_in === true) {
      const token = req.headers.authorization.split(' ')[1];
      await jwt.verify(token, process.env.SECRETE);
      next();
    } else {
      res.status(401).send({ message: 'You are not logged in' });
    }
  } catch (error) {
    res.status(401).send({ message: 'You are not logged in' });
  }
};
