/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { User } from '../database/models';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import { decodeToken } from '../helpers/user.helpers';

export const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const tok = decodeToken(token);
    const user = await User.findOne({ where: { email: tok.email } });
    if (user.Logged_in === false) {
      return res.status(401).json({ message: 'please log in first' });
    }
    await jwt.verify(token, process.env.SECRETE);
    next();
  } catch (error) {
    res.status(401).send({ message: 'You are not logged in' });
  }
};
