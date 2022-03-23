/* eslint-disable curly */
/* eslint-disable require-jsdoc */
import tripCommentsServices from '../services/trip.comments.service';

class tripCommentController {
    static async createComment(req, res) {
        try {
            const { user } = req;
            if (
                user.dataValues.id !== req.trip.dataValues.user_id &&
                user.dataValues.manager_id !== req.trip.dataValues.manager_id
            )
                return res.status(400).json({
                    message: 'trip does not belong to you.'
                });
            const data = {
                ...req.body,
                user_id: user.dataValues.id,
                trip_id: req.trip.id
            };
            const sendComment = await tripCommentsServices.createComment(data);
            return res
                .status(201)
                .json({ message: 'comment sent successfully', sendComment });
        } catch (err) {
            return res.status(500).json({ message: 'internal server error', err });
        }
    }

    static async findAllComments(req, res) {
        try {
            const found = await tripCommentsServices.findTripComments();
            return res.status(200).json({ message: 'retrieved all comments', found });
        } catch (err) {
            /* istanbul ignore next */
            return res.status(500).json({ message: 'internal server error', err });
        }
    }

    static async editedComment(req, res) {
        try {
            const { user } = req;
            const foundComment = req.comment.dataValues;
            const commentId = foundComment.id;
            if (
                user.dataValues.id !== req.trip.dataValues.user_id &&
                user.dataValues.manager_id !== req.trip.dataValues.manager_id
            )
                return res.status(409).json({
                    message: 'only comment owner is allowed to perform this activity.'
                });
            /* istanbul ignore next */
            if (user.dataValues.id !== foundComment.user_id)
                return res
                    .status(409)
                    .json({ message: 'you are not allowed to edit this comment' });
            const commentUpdate = {
                id: foundComment.id,
                trip_id: foundComment.trip_id,
                user_id: foundComment.user_id,
                /* istanbul ignore next */
                comment: req.body.comment ? req.body.comment : foundComment.comment
            };
            await tripCommentsServices.editComment({ where: { id: commentId } },
                commentUpdate
            );
            const findEdited = await tripCommentsServices.findSpecificComment(
                commentId
            );

            return res
                .status(200)
                .json({ message: 'successfully edited a comment', findEdited });
        } catch (err) {
            return res.status(500).json({ message: 'internal server error', err });
        }
    }

    static async removeComment(req, res) {
        try {
            const { user } = req;
            const foundComment = req.comment.dataValues;
            const commentId = req.comment.dataValues.id;
            if (
                user.dataValues.id !== req.trip.dataValues.user_id &&
                user.dataValues.manager_id !== req.trip.dataValues.manager_id
            )
                return res.status(409).json({
                    message: 'you are not allowed to perform this activity'
                });
            /* istanbul ignore next */
            if (user.dataValues.id !== foundComment.user_id)
                return res
                    .status(400)
                    .json({ message: 'you are not allowed to delete this comment' });
            const destroyComment = await tripCommentsServices.removeComment({
                where: { id: commentId }
            });
            return res
                .status(200)
                .json({ message: 'successfuly removed a comment', destroyComment });
        } catch (err) {

            return res.status(500).json({ message: 'internal server error', err });
        }
    }
}
export default tripCommentController;