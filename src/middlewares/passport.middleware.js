import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
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

export default passport;
