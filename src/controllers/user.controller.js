/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import bcryptjs from 'bcryptjs';
import sgMail from '@sendgrid/mail';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
import { confirmEmail } from '../utils/email.utils';
import UserService from '../services/user.service';
import { User } from '../database/models';
import {
    generateToken,
    hashPassword,
    comparePassword,
    decodeToken
} from '../helpers/user.helpers';
import { verifyEmail } from '../helpers/user.verify';
import Profiles from "services/profile.service"
import cloudinary from '../config/cloudinary';
import nodemailer from "../helpers/nodemailer.helper"

config();

export default class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async createUser(req, res) {
        try {
            const { first_name, last_name, email, password, role_id, location_id } = req.body
            const newUser = await this.userService.createUser({ first_name, last_name, email, password: hashPassword(password), role_id: 4, location_id }, res);
            const token = generateToken({ id: newUser.id }, '1d');
            await Profiles.createProfile({ user_id: newUser.id })
            const text = `
         Hello, thanks for registering on Barefoot Nomad site.
         Please copy and paste the address below into address bar to verify your account.
         ${process.env.BASE_URL}/api/v1/users/verify-email/${token}
         `
            const html = verifyEmail(token)
            await nodemailer(newUser.email, "Email Verification", text, html)
            return res
                .status(201)
                .json({
                    message: 'User registered successfully! Please check your email for verification.',
                    token
                });
        } catch (error) {
            return res.status(500).json({
                message: 'Error occured while creating a user',
                error: error.message
            });
        }
    }

    async verifyNewUser(req, res) {
        try {
            const { token } = req.params;

            const userInfo = decodeToken(token);

            const userId = userInfo.id;

            const user = await this.userService.getUserId(userId);

            await user.update({ isVerified: true }, { where: { id: userId } });
            return res
                .status(200)
                .send({ message: 'Account verified! You can proceed to log in.' });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }
    async userLogin(req, res) {
        try {
            const user = await this.userService.userLogin(req.body.email, res);
            const validation = await comparePassword(
                req.body.password,
                user.password
            );
            if (validation) {
                const token = await generateToken({ email: user.email, userId: user.id },
                    '1d'
                );
                return res
                    .status(201)
                    .header('authenticate', token)
                    .json({ message: 'Logged in successfully', token });
            }
            return res.status(400).json({ message: 'Invalid password' });
        } catch (error) {
            return res.status(404).json({
                message: 'Error occured while logging in',
                error
            });
        }
    }
    static async forgot(req, res) {
        try {
            const exist = await new UserService().userExist(req.body.email);
            if (exist.email) {
                const tokenid = generateToken({ id: exist.id }, '10m');
                const confirm = confirmEmail(tokenid)
                await nodemailer(exist.email, "reset password", "request for reset password", confirm)
                return res.status(200).json({
                    status: 200,
                    message: 'Password reset link has been sent to your email'
                });
            } else {
                res.status(404).json({ status: 404, message: 'Email has not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }

    }
    static async reset(req, res) {
        try {
            const { password } = req.body;
            const { token } = req.params;
            const userInfo = jwt.verify(token, process.env.SECRETE);
            const userId = userInfo.id;
            const newPassword = await bcryptjs.hash(password, 10);
            User.update({ password: newPassword }, { where: { id: userId } });
            return res
                .status(200)
                .send({ message: 'Your new password has been set Return to Login' });
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async googleLogin(req, res) {
        try {
            const profile = req.user;

            let user = await new UserService().getUser(profile.emails[0].value);

            if (!user) {
                user = await new UserService().createUser({
                    email: profile.emails && profile.emails[0].value,
                    password: null,
                    role_id: 4,
                    first_name: profile.name && profile.name.familyName,
                    last_name: profile.name && [profile.name.middleName, profile.name.givenName].join(' '),
                    profile_picture: profile.photos && profile.photos[0].value,
                    provider: 'GOOGLE'
                });
            }

            const token = generateToken({ email: user.email, id: user.id }, '1d');

            return res.status(200).json({
                status: 200,
                message: 'Logged in successfully',
                token
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error occured while logging in',
                data: error.message
            });
        }
    }

    async facebookLogin(req, res) {
        try {
            const profile = req.user;

            let user = await new UserService().getUser(profile.emails[0].value);

            if (!user) {
                user = await new UserService().createUser({
                    email: profile.emails && profile.emails[0].value,
                    password: null,
                    role_id: 4,
                    first_name: profile.name && profile.name.familyName,
                    last_name: profile.name && [profile.name.middleName, profile.name.givenName].join(' '),
                    profile_picture: profile.photos && profile.photos[0].value,
                    provider: 'FACEBOOK'
                });
            }

            const token = generateToken({ email: user.email, id: user.id }, '1d');

            return res.status(200).json({
                status: 200,
                message: 'Logged in successfully',
                token
            });
        } catch (error) {
            return res.status(500).json({
                message: 'Error occured while logging in',
                data: error.message
            });
        }
    }

    async Logout(req, res) {
        try {
            const user = await this.userService.userLogout(
                req.headers.authorization.split(' ')[1]
            );
            if (user.first_name) {
                return res.status(200).json({
                    message: `You have been logged out ${user.first_name}`
                });
            }
        } catch (error) {
            return res.status(500).json({
                error: error.message,
                message: 'error occured while logging you out'
            });
        }
    }
    async profileUpdate(req, res) {
        try {
            const user = await this.userService.getUser(req.user.dataValues.email)
            const { first_name, last_name, occupation, language, nationality, bio, age, gender, date_of_birth, location_id } = req.body
            let profile_picture = null
            if (req.file) {
                const uploadFile = await cloudinary.uploader.upload(req.file.path)
                profile_picture = uploadFile.url
            }
            const updatedUser = await this.userService.updateUser({ first_name, last_name, location_id, profile_picture }, user.id)
            const updated = await Profiles.updateProfile({ occupation, language, nationality, bio, age, gender, date_of_birth }, user.id)
            return res.status(201).json({
                message: "Profile updated",
                data: [updatedUser[0] && updatedUser[1][0], updated[0] && updated[1][0]]
            })

        } catch (error) {
            return res.status(500).json({
                message: 'Error occured while updating your profile',
                error
            })
        }
    }
    static async assignUserToManager(req, res) {
        try {
            const { userId, managerId } = req.body;
            const userExist = await UserService.findById(userId);

            if (userExist) {
                const manager = await UserService.findById(managerId);
                if (manager && manager.Role.name == "MANAGER") {
                    await UserService.update({ manager_id: managerId }, { id: userId });
                    return res.status(200).send({ message: "User assigned to manager" });
                }

                return res.status(400).send({ message: "No Manger with such Id" });


            }
            return res.status(400).send({ message: "No user with such Id" });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }

}