/* eslint-disable import/prefer-default-export */
/* eslint-disable require-jsdoc */
import { User } from '../database/models';
import Jwt from 'jsonwebtoken';
import "dotenv"

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

export const authenticateRoute = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      const verify = Jwt.verify(token, process.env.SECRETE);
      req.user = verify
      next()
  }
  } catch (error) {
    res.status(401).send("Access denied")
    
  }
  
  
}
