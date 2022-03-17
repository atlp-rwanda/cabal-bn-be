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
const checkUserSupperAdmin = (req, res, next) => {
  checkLoggedInUser(req, res, next, 'SUPER_ADMIN');
};
=======
const checkUserSupperAdmin=(req,res,next)=>{
  checkLoggedInUser(req,res,next,'SUPER_ADMIN')

}
>>>>>>> 3088589d9b5786604e2096ab525dc64603b335e7
routes.patch(
  '/assignRole',
  roleValidation,
  checkUserSupperAdmin,
  checkEmailNotExist,
  checkRoleSame,
  async (req, res) => {
    await new RoleController().updateRole(req, res);
  }
);

routes.get('/getRoles', checkLoggedInUser, async (req, res) => {
  await new RoleController().getRoles(req, res);
});

export default routes;
