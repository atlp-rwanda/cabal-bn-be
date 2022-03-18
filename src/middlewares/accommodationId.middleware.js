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
