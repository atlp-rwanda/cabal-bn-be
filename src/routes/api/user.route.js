import express from 'express';
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';
import { checkEmailExist } from '../../middlewares/user.middleware';
import { checkLoggedInUser } from '../../middlewares/role.middleware';
import roleValidation from '../../validations/role.validation';
import RoleController from '../../controllers/role.controller';

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

routes.patch(
  '/assignRole',
  roleValidation,
  checkLoggedInUser,
  async (req, res) => {
    await new RoleController().updateRole(req, res);
  }
);

routes.get('/getRoles', checkLoggedInUser, async (req, res) => {
  await new RoleController().getRoles(req, res);
});


export default routes;
