import express from 'express';
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';
import { checkEmailExist } from '../../middlewares/user.middleware';
import {
  checkLoggedInUser,
  checkRoleSame,
  checkEmailNotExist
} from '../../middlewares/role.middleware';
import roleValidation from '../../validations/role.validation';
import RoleController from '../../controllers/role.controller';
import {
  EmailValidation,
  PasswordValidation
} from '../../validations/resetPassword.validation';

const routes = express.Router();

routes.post(
  '/register',
  userValidation,
  checkEmailExist,
  passport.authenticate('local', { session: false }),
  async (req, res) => {
    await new UserController().createUser(req, res);
  }
);

routes.post('/login', userValidation, async (req, res) => {
  await new UserController().userLogin(req, res);
});

routes.get(
  '/google/login',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }),
  async (req, res) => {
    await new UserController().googleLogin(req, res);
  }
);

routes.get(
  '/facebook/login',
  passport.authenticate('facebook', {
    session: false,
    scope: ['email', 'public_profile', 'user_photos']
  }),
  async (req, res) => {
    await new UserController().facebookLogin(req, res);
  }
);

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
routes.patch(
  '/reset-password/:token',
  PasswordValidation,
  UserController.reset
);
routes.post('/forgot-password', EmailValidation, UserController.forgot);
export default routes;
