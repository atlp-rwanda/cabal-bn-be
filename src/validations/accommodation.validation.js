/* eslint-disable curly */
import Joi from 'joi';
import cloudinary from '../config/cloudinary';

const accommodationValidation = async (req, res, next) => {
  const services = [];
  const amenities = [];
  const urls = [];
  const imageId = [];
  if (!Array.isArray(req.body.services)) {
    services.push(req.body.services);
    req.body.services = services;
  }
  if (!Array.isArray(req.body.amenities)) {
    amenities.push(req.body.amenities);
    req.body.amenities = amenities;
  }
  if (!Array.isArray(req.body.images)) {
    const file = await cloudinary.uploader.upload(req.body.images.path);
    if (!file) return res.status(400).json({ message: 'not able to upload' });
    urls.push(file.url);
    imageId.push(file.public_id);
    req.body.images = urls;
    req.body.imagesId = imageId;
  }
  const accommodationValidationSchema = Joi.object({
    name: Joi.string().required().min(3),
    description: Joi.string().required().min(5),
    images: Joi.array(),
    imagesId: Joi.array(),
    location_id: Joi.number().required().min(1),
    services: Joi.array().items(Joi.string()).min(0).required(),
    amenities: Joi.array().items(Joi.string()).min(0).required(),
    user_id: Joi.number()
  });
  const results = accommodationValidationSchema.validate(req.body);
  if (results.error)
    return res.status(400).json({
      message: results.error.details[0].message.replace(/["'`]+/g, '')
    });

  req.accommodations = results;
  next();
};

export default accommodationValidation;
