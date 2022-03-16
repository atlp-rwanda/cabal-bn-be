/* eslint-disable import/prefer-default-export */
import { User } from '../database/models';
import { decodeToken } from '../helpers/user.helpers';
import RoleService from '../services/role.service';

export const checkLoggedInUser = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(' ')[1];
  let payload;
  try {
    payload = decodeToken(token);
  } catch (error) {
    return res.status(403).json({ message: 'user not logged in' });
  }

  const user = await User.findOne({
    where: { email: payload.email },
    include: 'Role'
  });
  if (user.Role.name !== 'SUPER_ADMIN') {
    return res.status(401).json({ message: 'access denied' });
  }

  next();
};

export const checkRoleSame = async (req, res, next) => {
  const { email, role } = req.body;

  const user = await User.findOne({ where: { email } });
  const { id: roleId } = await new RoleService().getRole(role);

  if (user && user.role_id === roleId) {
    return res.status(409).json({
      message: `User already have ${role} role`
    });
  }

  next();
};

export const checkEmailNotExist = async (req, res, next) => {
  const { email } = req.body;
  const emailExist = await User.findOne({
    where: {
      email
    }
  });
  if (emailExist) {
    next();
  } else {
    return res
      .status(404)
      .json({ message: `User with email ${email} doesn't exist` });
  }
};
