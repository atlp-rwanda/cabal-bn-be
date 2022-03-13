import express from 'express';
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';
import { checkEmailExist } from '../../middlewares/user.middleware';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  checkLoggedInUser,
  checkRoleSame,
  checkEmailNotExist
} from '../../middlewares/role.middleware';
import roleValidation from '../../validations/role.validation';
import RoleController from '../../controllers/role.controller';
=======
import { authenticate } from 'passport';
import { authentication } from '../../middlewares/authentication';
>>>>>>> 1797fa5 (log out functionalities)
=======
import { authenticate } from 'passport';
import { authentication } from '../../middlewares/authentication';
>>>>>>> 1797fa5 (log out functionalities)

const routes = express.Router();

routes.post(
  '/register',
  userValidation,
  checkEmailExist,
  passport.authenticate('local', { session: false }),
  async (req, res) => {
    await new UserController().createUser(req.user, res);
  }
);

routes.post('/login', userValidation, async (req, res) => {
  await new UserController().userLogin(req, res);
});
<<<<<<< HEAD
<<<<<<< HEAD

routes.patch(
  '/assignRole',
  roleValidation,
  checkLoggedInUser,
  checkEmailNotExist,
  checkRoleSame,
  async (req, res) => {
    await new RoleController().updateRole(req, res);
  }
);

routes.get('/getRoles', checkLoggedInUser, async (req, res) => {
  await new RoleController().getRoles(req, res);
});
=======
>>>>>>> 1797fa5 (log out functionalities)

=======

>>>>>>> 1797fa5 (log out functionalities)
routes.post('/logout', authentication, async (req, res) => {
  await new UserController().Logout(req, res);
});

export default routes;
