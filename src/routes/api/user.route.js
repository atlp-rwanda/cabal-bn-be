import express from 'express';
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';
import { checkEmailExist, authenticateRoute } from '../../middlewares/user.middleware';

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
})


export default routes;
