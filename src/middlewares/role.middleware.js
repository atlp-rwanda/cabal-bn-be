/* eslint-disable import/prefer-default-export */
import { User } from '../database/models';
import { decodeToken } from '../helpers/user.helpers';

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
