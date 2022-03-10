/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable require-jsdoc */
import UserService from '../services/user.service';
const bcrypt = require('bcrypt');
import { User } from '../database/models';
import { generateToken, generateTokenid, hashPassword, comparePassword } from '../helpers/user.helpers';
import sgMail from '@sendgrid/mail';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';
config();


export default class UserController {
    constructor() {
        this.userService = new UserService();
    }

    async createUser(req, res) {
        try {
            const data = req.body;
            data.password = hashPassword(data.password);
            data.role_id = 4;
            const newUser = await this.userService.createUser(data, res);

            const token = generateToken({ email: newUser.email }, '1d');
            return res
                .status(201)
                .json({ message: 'user registered successfully', token });
        } catch (error) {
            return res.status(500).json({
                message: 'Error occured while creating a user',
                error: error.message
            });
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
                const token = await generateToken({ email: user.email }, '1d');
                return res
                    .status(201)
                    .header('authenticate', token)
                    .json({ message: 'Logged in successfully', token });
            }
            return res.status(401).json({ message: 'Invalid password' });
        } catch (error) {
            return res.status(404).json({
                message: 'Error occured while logging in',
                error
            });
        }
    }
    static async forgot(req, res) {

        const exist = await new UserService().userExist(req.body.email);
        const tokenid = generateTokenid(exist.id, '2h')
        if (exist.email) {
            const message = {
                to: exist.email,
                from: {
                    name: "cabal",
                    email: 'cabalbarefoot@gmail.com',
                },
                subject: 'reset password',
                text: 'request for reset password',
                html: `  
                Hi ${exist.first_name},<br>
                Forgot your password?<br>
                We received a request to reset the password for your account.
                <br>
                To reset your password, click on the button bellow 
                <br>
                <a href=${process.env.BASE_URL}/api-docs/${tokenid}>
                <button>Reset Password</button>
                </a>
                <br>
                or copy and paste the URL into your browser.<br>
                <a href=${process.env.BASE_URL}/api-docs/${tokenid}>resertpassword</a>
                <br>
                This password reset link is only valid for the next 2 hours.
                <br>
                If you did not make this request then please ignore this email.

                `
            }
            sgMail.send(message)
                .then(response => {
                    res.status(200).json({ status: 200, message: "check your email" });
                })
                .catch(error => console.log(error.message))

        } else {
            res.status(403).json({ status: 403, message: 'Email not exist' });
        }
    }
    static async reset(req, res) {
        const fpassword = req.body.password;
        const token = req.headers.authorization.split(" ")[1];
        const userInfo = jwt.verify(token, process.env.SECRETE);
        const userId = userInfo.id;
        bcrypt.hash(fpassword, 10, (err, newpassword) => {

            try {
                const n = User.update({ password: newpassword }, { where: { id: userId } })
                return res.status(200).send("reset well");
            } catch (error) {
                return res.status(403).send("reset not well");
            }

        });

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
}