/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-useless-path-segments
import { tripSchema } from "../tripValidation/trip.schema";

export const requestValidation = async(req, res, next) => {
    const validate = await tripSchema.validate(req.body);
    if (!validate || validate.hasOwnProperty("error")) {
        return res.json({ error: validate.error.details[0].message });
    // eslint-disable-next-line no-else-return
    } else {
        next();
    }
};