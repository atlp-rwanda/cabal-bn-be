/* eslint-disable radix */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable curly */
import accommodationService from '../services/accommodations.service';

// eslint-disable-next-line import/prefer-default-export
export const validateAccommodationId = async (req, res, next) => {
  const { accommodationId } = req.params;
  const accommodation = await accommodationService.findSpecificAccommodation(
    accommodationId
  );
  if (!accommodation)
    return res.status(404).json({ message: 'Accommodation not found' });
  req.accommodation = accommodation;
  next();
};

export const validateAccommodationFields =
  (...args) =>
  async (req, res, next) => {
    for (let i = 0; i < args.length; i++) {
      const id = req.body[args[i]];
      const accommodation =
        await accommodationService.findSpecificAccommodation(id);

      if (!accommodation) {
        return res
          .status(404)
          .json({ message: `Accommodation with id ${id} not found` });
      }
    }

    next();
  };

// export const validateAccommodationParam = async (req, res, next) => {
//   const id = parseInt(req.params.id);
//   const trips = await Trip.findAll({ where: { user_id: req.user.id } });

//   for (let i = 0; i < trips.length; i++) {
//     const trip = trips[i];

//     if (trip.accommodation_id === id) {
//       return next();
//     }
//   }

//   return res
//     .status(404)
//     .json({ message: `Accommodation with id ${id} not found` });
// };
