/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable no-lonely-if */
/* eslint-disable require-jsdoc */
import { Trip } from '../database/models';
import { checkRole } from '../helpers/role.helper';

class searchServices {
  static async noQuery(user) {
    let data;
    const role = await checkRole(user.role_id);

    if (role.name === 'SUPER_ADMIN') {
      data = await Trip.findAll();
    } else if (role.name === 'MANAGER') {
      data = await Trip.findAll({
        where: {
          manager_id: user.id
        }
      });
    } else {
      data = await Trip.findAll({
        where: {
          user_id: user.id
        }
      });
    }

    return data;
  }
}

export default searchServices;
