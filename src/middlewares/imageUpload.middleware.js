import cloudinary from '../config/cloudinary';

export const updateProfilePicture = async (req, res, next) => {
  if (req.body.profile_picture) {
    /* istanbul ignore next */
    const uploadFile = await cloudinary.uploader.upload(
      req.body.profile_picture.path
    );
    /* istanbul ignore next */
    req.body.profile_picture = uploadFile.url;
  }
  next();
};
