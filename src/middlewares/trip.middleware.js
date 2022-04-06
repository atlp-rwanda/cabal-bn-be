/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */

import { validateDate, subDays } from '../helpers/dataComparison';
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
  const { arrival_location } = req.body;
  const destination = await Promise.all(
    arrival_location.map(async (data) => {
      const { accommodation_id } = data;
      const accommodation =
        await accommodationService.findSpecificAccommodation(accommodation_id);
      return accommodation;
    })
  );

  for (let i = 0; i <= destination.length - 1; i++) {
    if (destination[i] === null) {
      console.log(destination[i]);
      return res.status(400).json({
        message: `This accomodation is not availble on destination number ${
          i + 1
        }`
      });
    }
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
  /* istanbul ignore next */

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

export const checkDuration = async (req, res, next) => {
  const { arrival_location } = req.body;
  const time = subDays(req.body.returnDate, req.body.tripDate);

  const duration = arrival_location.map((data) => {
    return data.days;
  });

  const sum = duration.reduce((a, b) => a + b);

  if (sum > time) {
    return res
      .status(400)
      .json({ message: 'days in trips exceed trip duration' });
  }

  next();
};

export const checkManager = async (req, res, next) => {
  if (!req.user.manager_id) {
    return res.status(400).json({
      message: 'Access denied, You are not assigned a manager'
    });
  }
  next();
};
