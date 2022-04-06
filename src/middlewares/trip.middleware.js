/* eslint-disable camelcase */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */

import { validateDate } from '../helpers/dataComparison';
import accommodationService from '../services/accommodations.service';
import tripService from '../services/trip.service';
import { Trip } from '../database/models';

export const checkTripExistStatus = (status) => (req, res, next) => {
  tripService
    .findSpecificTrip(req.user.id, 10, 0, req.user.Role.name)
    .then((trips) => {
      for (let i = 0; i < trips.rows.length; i++) {
        const trip = trips.rows[i];

        if (trip.id === parseInt(req.params.id)) {
          if (trip.status === status) {
            return next();
          }

          return res.status(400).json({
            message: `Trip request should be in pending to perform this request`
          });
        }
      }

      return res.status(404).json({ message: 'No trip with that Id found' });
    });
};

export const checkTripDates = (req, res, next) => {
  const compareDates = validateDate(req.body.returnDate, req.body.tripDate);
  if (!compareDates) {
    return res.status(400).json({
      status: 400,
      message: 'Trip date is greater than or equal to the return date'
    });
  }

  next();
};

export const checkLocationAccommodation = async (req, res, next) => {
  const { accommodation_id, arrival_location_id } = req.body;
  const accommodation = await accommodationService.findSpecificAccommodation(
    accommodation_id
  );

  if (accommodation.location_id !== parseInt(arrival_location_id)) {
    return res.status(400).json({
      message: `The location and accommodation doesn't match, The accomodation passed has location of id ${accommodation.location_id}`
    });
  }

  next();
};

export const checkTripIdExist = async (req, res, next) => {
  const tripId = req.params.id;
  const tripExist = await Trip.findByPk(tripId);
  if (!tripExist) {
    return res.status(404).json({ message: 'No trip with that Id found' });
  }
  req.trip = tripExist;
  next();
};

export const checkManagerId = async (req, res, next) => {
  const { trip } = req;
  if (trip.manager_id === req.user.id || req.user.Role.name === 'SUPER_ADMIN') {
    return next();
  }
  return res.status(404).json({ message: 'No manager with that Id found' });
};
// get a time in days and check if a requester has pent that much time in a given accommodation
export const checkTimeOnTrip = (days) => async (req, res, next) => {
  const { id: user_id } = req.user;
  const { accommodationId: accommodation_id } = req.params;

  // get all trips created by that user and have the given accommodaton
  const trips = await Trip.findAll({
    where: { user_id, accommodation_id, status: 'APPROVED' }
  });

  if (!trips.length) {
    return res.status(400).json({
      message: 'You never had a trip at this accommodation'
    });
  }

  // get the now date and the passed In date in milliseconds
  const nowDate = new Date().getTime();
  const timeMillisecs = days * 24 * 60 * 60 * 1000;

  // loop to find if a user have spend larger than the passed In time in atleast one of the trips
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];

    const departDate = new Date(trip.tripDate).getTime();

    if (nowDate - departDate > timeMillisecs) {
      return next();
    }
  }

  return res.status(400).json({
    message: `You should spend atleast ${days} days in this accommodation to comment on it`
  });
};
