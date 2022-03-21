/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

import locationService from '../services/location.service';

/* eslint-disable import/prefer-default-export */
export const validateLocationFields =
  (...args) =>
  async (req, res, next) => {
    for (let i = 0; i < args.length; i++) {
      const id = req.body[args[i]];
      const location = await locationService.findLocation(id);

      if (!location) {
        return res
          .status(404)
          .json({ message: `Location with id ${id} not found` });
      }
    }

    next();
  };
