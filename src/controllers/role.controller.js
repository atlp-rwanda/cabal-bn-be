/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */

import RoleService from '../services/role.service';
import UserService from '../services/user.service';

export default class RoleController {
  async updateRole(req, res) {
    try {
      const { email, role } = req.body;

      const user = await new UserService().getUser(email);
      const { id: roleId } = await new RoleService().getRole(role);

      if (!user) {
        return res.status(404).json({
          message: `User with email ${email} doesn't exist`
        });
      }
      if (user.role_id === roleId) {
        return res.status(409).json({
          message: `User already have ${role} role`
        });
      }

      user.role_id = roleId;
      await user.save();

      return res.status(200).json({
        message: 'User role updated successfully',
        data: user
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating a user',
        error:
          (error.message && error.message.replace(/['"`]+/gi, '')) ||
          'user not created'
      });
    }
  }
}
