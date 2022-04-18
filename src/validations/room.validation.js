/* eslint-disable curly */
import joi from 'joi';
import cloudinary from '../config/cloudinary';

const roomValidation = async (req, res, next) => {
  const urls = [];
  /* istanbul ignore next */
  if (!Array.isArray(req.body.images)) {
    const file = await cloudinary.uploader.upload(req.body.images.path);


    if (!file) return res.status(400).json({ message: 'not able to upload' });
    urls.push(file.url);
    req.body.images = urls;
  }
  const roomValidationSchema = joi.object().keys({
    price: joi.string().required(),
    images: joi.array(),
    details: joi.string().required().min(5),
    accommodation_id: joi.number()
  });

  const results = roomValidationSchema.validate(req.body);
  if (results.error)
    return res.status(400).json({
      message: results.error.details[0].message.replace(/["'`]+/g, '')
    });

  req.rooms = results;
  next();
};

export default roomValidation;
