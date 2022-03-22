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
