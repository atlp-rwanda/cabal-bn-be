/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

import locationService from '../services/location.service';
import { Location, Accommodation, User } from '../database/models';
import UserService from '../services/user.service';

/* eslint-disable import/prefer-default-export */
export const validateLocationFields = async (req, res, next) => {
  const id = req.body.depart_location_id;
  const location = await locationService.findLocation(id);
  /* istanbul ignore next */
  if (!location) {
    return res
      .status(404)
      .json({ message: `Location with id ${id} not found` });
  }
  return next();
};

export const validateLocationId = async (req, res, next) => {
  try {
    const { location_id } = req.body;
    if (location_id) {
      // const userLocation = await new UserService().getUser(email)
      const location = await locationService.findLocation(location_id);
      if (!location) {
        return res.status(404).json({ message: `Location with id not found` });
      }

      return next();
    }
    return next();
  } catch (error) {
    /* istanbul ignore next */

    return res.status(500).json({ message: error.message });
  }
};
