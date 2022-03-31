/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

import locationService from '../services/location.service';
import { Location, Accommodation, User } from '../database/models';
import UserService from '../services/user.service';

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

export const validateLocationId = async (req, res, next) => {
  try {
    const {location_id} = req.body
    if(location_id) {
      // const userLocation = await new UserService().getUser(email)
      const location =  await locationService.findLocation(location_id);
      if(!location) {
        return res
              .status(404)
              .json({ message: `Location with id not found` });
      }

      return next()
    }
    return next()
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: error.message})
  }
}

// export const checkLocationId = async(req, res, next) => {
//   try {
//     const {email} = req.user
//     const userLocation = await new UserService().getUser(email)
//     const location =  await locationService.findLocation(userLocation.location_id);
//     if(!location) {
//       return res
//             .status(404)
//             .json({ message: `Location with id ${location.id} not found` });
//     }

//     return next()
//   } catch (error) {
    
//   }
// }

// export const findLocation = async(req, res, next) => {
//   try {
//     const {name, description, longitude, latitude, country} = req.body
//     const location = await Location.findOne({where: {longitude, latitude}})
//     if(location) {
//       req.query = {id: location.id}
//       return next()
//     }
//     const newLocation = await locationService.createLocation({name, description, longitude, latitude, country})
//     req.query = {id: newLocation.id}
//     return next()
//   } catch (error) {
//     return res.status(500).json({message: error.message})
//   }
  
// }
