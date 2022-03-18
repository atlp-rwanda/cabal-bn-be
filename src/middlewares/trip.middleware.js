/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */

import { validateDate } from '../helpers/dataComparison';
import tripService from '../services/trip.service';

export const checkTripExistStatus = (status) => async (req, res, next) => {
  const trips = await tripService.findSpecificTrip(req.user.id, 10, 0);

  for (let i = 0; i < trips.rows.length; i++) {
    const trip = trips.rows[i];

    if (trip.id === parseInt(req.params.id)) {
      if (trip.status === status || trip.status) {
        return next();
      }

      return res.status(400).json({
        message: `Trip request should be in pending to perform this request`
      });
    }
  }

  return res.status(404).json({ message: 'No trip with that Id found' });
};

export const checkTripDates = (req, res, next) => {
  const compareDates = validateDate(req.body.returnDate, req.body.tripDate);
  if (!compareDates) {
    return res.status(400).json({
      status: 400,
      message: 'Trip date is grater than or equal to the return date'
    });
  }

  next();
};
