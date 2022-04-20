import { notification } from "../database/models"
import { Op } from 'sequelize';

export const checkallNotificationUserExist = async(req, res, next) => {
    const notificationExist = await notification.findAll({
        where: { to_user_id: req.user.id }
    });
    if (!notificationExist[0]) {
        return res.status(400).json({ message: 'Notification not found' });
    } else {
        next();
    }
};
export const checkNotificationUserExist = async(req, res, next) => {
    const notificationExist = await notification.findAll({
        where: {
            [Op.and]: [
                { to_user_id: req.user.id },
                { isRead: false }
            ]
        }
    });
    if (!notificationExist[0]) {
        return res.status(400).json({ message: 'Notification not found' });
    } else {
        next();
    }
};

export const checkNotificationUserExistone = async(req, res, next) => {
    const notificationExist = await notification.findOne({
        where: {
            [Op.and]: [
                { to_user_id: req.user.id },
                { id: req.params.id }
            ]
        }
    });
    if (!notificationExist) {
        return res.status(400).json({ message: 'Notification not found' });
    } else if (notificationExist.isRead === true) {
        return res.status(400).json({ message: 'Notification is already marked' });
    } else {
        next();
    }
};