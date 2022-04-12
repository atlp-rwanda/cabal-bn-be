import cloudinary from '../config/cloudinary';

export const updateProfilePicture = async (req, res, next) => {
  if (req.body.profile_picture) {
    const uploadFile = await cloudinary.uploader.upload(
      req.body.profile_picture.path
    );
    req.body.profile_picture = uploadFile.url;
  }
  next();
};
