/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import UserService from 'services/user.service';
import { generateToken, hashPassword, comparePassword } from 'helpers/user.helpers';

export default class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUser(data, res) {
    try {
      data.password = hashPassword(data.password);
      const newUser = await this.userService.createUser(data, res);

      const token = generateToken({email: newUser.email}, '7d');
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

  async userLogin(req, res, next) {
    try {
      const user = await this.userService.userLogin(req.body.email, res);
      const validation = await comparePassword(req.body.password, user.password)
      if(validation) {
        const token = await generateToken({email: user.email}, "1d")
        res.status(201).header("authenticate", token).json({message: "Logged in successfully", token: token})
      }
      else {
        res.status(401).send("Invalid password")
      }
    } catch (error) {
      console.log(error)
      res.status(404).send({error: error})
    }
    
  }
}
