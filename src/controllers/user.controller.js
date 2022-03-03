<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 886728a (finished rebasing and updating user model)
/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import UserService from 'services/user.service';
import { generateToken, hashPassword } from 'helpers/user.helpers';
=======
import UserService from '../services/user.service';
import { generateToken, hashPassword } from '../helpers/user.helpers';
>>>>>>> 86d4444 (chore: updated yarn.lock)

// eslint-disable-next-line require-jsdoc
export default class UserController {
<<<<<<< HEAD
  constructor() {
    this.userService = new UserService();
  }

  async createUser(data, res) {
    console.log('runned');
    try {
      data.password = hashPassword(data.password);
      const newUser = await this.userService.createUser(data, res);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 886728a (finished rebasing and updating user model)
      const token = generateToken(newUser.email, '7d');
      res.status(201).json({ message: 'user registered successfully', token });
    } catch (error) {
      res.status(409).json({
        message:
          (error.message && error.message.replace(/['"`]+/gi, '')) ||
          'user not created'
      });
    }
  }
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
import UserService from 'services/user.service';
import { generateToken, hashPassword } from 'helpers/user.helpers';
=======
import UserService from '../services/user.service';
import { generateToken, hashPassword } from '../helpers/user.helpers';
>>>>>>> 86d4444 (chore: updated yarn.lock)

// eslint-disable-next-line require-jsdoc
export default class UserController {
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
  // eslint-disable-next-line require-jsdoc
  constructor() {
    this.userService = new UserService();
  }
<<<<<<< HEAD

  // eslint-disable-next-line require-jsdoc
  async createUser(data, res) {
    try {
      data.password = hashPassword(data.password);
      const newUser = await this.userService.createUser(data, res);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
import UserService from 'services/user.service';
import { generateToken, hashPassword } from 'helpers/user.helpers';
=======
import UserService from 'services/user.service';
<<<<<<< HEAD
import { generateToken } from 'helpers/jwtFunctions';
import { hashPassword } from 'helpers/passwordSecurity';
>>>>>>> 53839d8 (chore: rebase commit)
=======
import UserService from 'services/user.service';
import { generateToken } from 'helpers/jwtFunctions';
import { hashPassword } from 'helpers/passwordSecurity';
>>>>>>> 17a720a (chore: rebased dev)
=======
import UserService from 'services/user.service';
import { generateToken } from 'helpers/jwtFunctions';
import { hashPassword } from 'helpers/passwordSecurity';
>>>>>>> e08edc4 (chore: rebased dev)
=======
import UserService from 'services/user.service';
import { generateToken } from 'helpers/jwtFunctions';
import { hashPassword } from 'helpers/passwordSecurity';
>>>>>>> 2dfab96 (feature: add user registration)
=======
import { generateToken, hashPassword } from 'helpers/user.helpers';
>>>>>>> 97759dc (chore: addedd other user model fields)

export default class UserController {
	constructor() {
		this.userService = new UserService();
	}
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)

  // eslint-disable-next-line require-jsdoc
  async createUser(data, res) {
    try {
      data.password = hashPassword(data.password);
      const newUser = await this.userService.createUser(data, res);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
			const token = generateToken(newUser.email, '7d');

			res.status(201).json({ message: 'user registered successfully', token });
		} catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4e05ae2 (minor changes)
			res.status(409).json({
=======
			res.status(500).json({
>>>>>>> 17a720a (chore: rebased dev)
=======
			res.status(410).json({
>>>>>>> e2aeb77 (chore: minor changes)
=======
			res.status(409).json({
>>>>>>> 2416061 (chore: added tests)
=======
			res.status(500).json({
>>>>>>> e08edc4 (chore: rebased dev)
=======
			res.status(500).json({
>>>>>>> 2dfab96 (feature: add user registration)
=======
			res.status(409).json({
>>>>>>> 6d0b069 (chore: minor changes)
<<<<<<< HEAD
=======
			res.status(500).json({
>>>>>>> 53839d8 (chore: rebase commit)
=======
			res.status(410).json({
>>>>>>> 79ba677 (chore: minor changes)
=======
			res.status(409).json({
>>>>>>> 7979cc8 (chore: some rebase commit)
=======
=======
>>>>>>> 203fb87 (chore: some rebase commit)
=======
>>>>>>> 203fb87 (chore: some rebase commit)
			res.status(409).json({
=======
			res.status(500).json({
>>>>>>> e08edc4 (chore: rebased dev)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
=======
			res.status(500).json({
>>>>>>> 2dfab96 (feature: add user registration)
>>>>>>> 203fb87 (chore: some rebase commit)
=======
			res.status(409).json({
>>>>>>> 41efe18 (feature: rebase commmit)
=======
			res.status(500).json({
>>>>>>> 17a720a (chore: rebased dev)
=======
			res.status(410).json({
>>>>>>> e2aeb77 (chore: minor changes)
=======
			res.status(409).json({
>>>>>>> 2416061 (chore: added tests)
=======
			res.status(500).json({
>>>>>>> e08edc4 (chore: rebased dev)
=======
			res.status(500).json({
>>>>>>> 2dfab96 (feature: add user registration)
=======
			res.status(409).json({
>>>>>>> 6d0b069 (chore: minor changes)
=======
			res.status(500).json({
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 4e05ae2 (minor changes)
=======
			res.status(500).json({
>>>>>>> 53839d8 (chore: rebase commit)
=======
			res.status(410).json({
>>>>>>> 79ba677 (chore: minor changes)
=======
			res.status(409).json({
>>>>>>> 7979cc8 (chore: some rebase commit)
=======
			res.status(409).json({
=======
			res.status(500).json({
>>>>>>> e08edc4 (chore: rebased dev)
>>>>>>> 6aa9cbd (chore: some rebase commit)
=======
=======
			res.status(500).json({
>>>>>>> 2dfab96 (feature: add user registration)
>>>>>>> 203fb87 (chore: some rebase commit)
=======
			res.status(409).json({
>>>>>>> 41efe18 (feature: rebase commmit)
=======
			res.status(500).json({
>>>>>>> 17a720a (chore: rebased dev)
=======
			res.status(410).json({
>>>>>>> e2aeb77 (chore: minor changes)
=======
			res.status(409).json({
>>>>>>> 2416061 (chore: added tests)
=======
			res.status(500).json({
>>>>>>> e08edc4 (chore: rebased dev)
=======
			res.status(500).json({
>>>>>>> 2dfab96 (feature: add user registration)
=======
			res.status(409).json({
>>>>>>> 6d0b069 (chore: minor changes)
				message:
					(error.message && error.message.replace(/['"`]+/gi, '')) ||
					'user not created',
			});
		}
	}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4e05ae2 (minor changes)
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
      const token = generateToken(newUser.email, '7d');

=======
      const token = generateToken(newUser.email, '7d');

>>>>>>> 86d4444 (chore: updated yarn.lock)
      res.status(201).json({ message: 'user registered successfully', token });
    } catch (error) {
      res.status(409).json({
        message:
          (error.message && error.message.replace(/['"`]+/gi, '')) ||
          'user not created'
      });
    }
  }
<<<<<<< HEAD
>>>>>>> 86d4444 (chore: updated yarn.lock)
=======
>>>>>>> 886728a (finished rebasing and updating user model)
=======
>>>>>>> d0a89b9 (rebase commit)
=======
>>>>>>> 53839d8 (chore: rebase commit)
=======
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
=======
>>>>>>> 86d4444 (chore: updated yarn.lock)
}
