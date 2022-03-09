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
  if (!emailExist) {
    next();
  } else {
    return res
      .status(409)
      .json({ message: `User with email ${email} already exist` });
  }
};
