import express from 'express';
<<<<<<< HEAD
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';
=======
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
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> 17a720a (chore: rebased dev)
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> e08edc4 (chore: rebased dev)
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> 2dfab96 (feature: add user registration)
=======
import passport from 'middlewares/passport.middleware';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/user.validation';
>>>>>>> 97759dc (chore: addedd other user model fields)
=======
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';
>>>>>>> 886728a (finished rebasing and updating user model)
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> d0a89b9 (rebase commit)
=======
import passport from 'middlewares/passport.middleware';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/user.validation';
>>>>>>> 4e05ae2 (minor changes)
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> 53839d8 (chore: rebase commit)
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> 17a720a (chore: rebased dev)
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> e08edc4 (chore: rebased dev)
=======
import passport from 'middlewares/passport';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/userValidations/user.validation';
>>>>>>> 2dfab96 (feature: add user registration)
=======
import passport from 'middlewares/passport.middleware';
import UserController from 'controllers/user.controller';
import userValidation from 'validations/user.validation';
>>>>>>> 97759dc (chore: addedd other user model fields)
>>>>>>> 08689d6 (* chore/changed procfile setting)

const routes = express.Router();

routes.post(
<<<<<<< HEAD
=======
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
>>>>>>> 08689d6 (* chore/changed procfile setting)
  '/register',
  userValidation,
  passport.authenticate('local', { session: false }),
  async (req, res) => {
    await new UserController().createUser(req.user, res);
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
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
	'/register',
	userValidation,
	passport.authenticate('local', { session: false }),
	async (req, res) => {
		await new UserController().createUser(req.user, res);
	}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 17a720a (chore: rebased dev)
=======
>>>>>>> e08edc4 (chore: rebased dev)
=======
>>>>>>> 2dfab96 (feature: add user registration)
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
>>>>>>> 08689d6 (* chore/changed procfile setting)
);

export default routes;
