/* eslint-disable curly */
/* eslint-disable import/prefer-default-export */
/* eslint-disable require-jsdoc */
import { User } from '../database/models';
import 'dotenv';

export const checkEmailExist = async (req, res, next) => {
  const { email } = req.body;
  const emailExist = await User.findOne({
    where: {
      email
    }
  });
  if (emailExist)
    return res
      .status(409)
      .json({ message: `User with email ${email} already exist` });

  return next();
};

export const checkVerifiedUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email
    }
  });
  if (!user || !user.isVerified)
    return res
      .status(400)
      .json({ message: 'Please verify your email to login!' });

  return next();
};
