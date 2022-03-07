import express from 'express';
import passport from '../../middlewares/passport.middleware';
import UserController from '../../controllers/user.controller';
import userValidation from '../../validations/user.validation';

const routes = express.Router();

routes.post(
  '/register',
  userValidation,
  passport.authenticate('local', { session: false }),
  async (req, res) => {
    await new UserController().createUser(req.user, res);
  }
);

export default routes;
