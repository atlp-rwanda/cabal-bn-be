import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { User } from '../database/models';
import 'dotenv';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      done(null, { email, password });
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRETE,
      callbackURL: process.env.CALLBACK_URL,
      passReqToCallback: true,
      scope: 'https://www.googleapis.com/auth/user.addresses.read'
    },
    // eslint-disable-next-line no-unused-vars
    async (req, accessToken, refreshToken, profile, done) => {
      const oldUser = await User.findOne({
        where: { email: profile.emails[0].value }
      });

      if (oldUser) {
        return done(null, oldUser);
      }

      const newUser = await User.create({
        email: profile.emails && profile.emails[0].value,
        password: null,
        role_id: 4,
        first_name: profile.name && profile.name.familyName,
        last_name:
          profile.name &&
          [profile.name.middleName, profile.name.givenName].join(' '),
        profile_picture: profile.photos && profile.photos[0].value,
        provider: 'GOOGLE'
      });
      return done(null, newUser);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRETE,
      callbackURL: process.env.FB_CALLBACK_URL,
      passReqToCallback: true,
      profileFields: ['id', 'emails', 'name', 'photos']
    },
    // eslint-disable-next-line no-unused-vars
    async (req, accessToken, refreshToken, profile, done) => {
      console.log(profile, accessToken);

      const oldUser = await User.findOne({
        where: { email: profile.emails[0].value }
      });

      if (oldUser) {
        return done(null, oldUser);
      }

      const newUser = await User.create({
        email: profile.emails && profile.emails[0].value,
        password: null,
        role_id: 4,
        first_name: profile.name && profile.name.familyName,
        last_name:
          profile.name &&
          [profile.name.middleName, profile.name.givenName].join(' '),
        profile_picture: profile.photos && profile.photos[0].value,
        ptovider: 'FACEBOOK'
      });
      return done(null, newUser);
    }
  )
);

export default passport;
