import passport from 'passport';
// import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import 'dotenv';

// passport.use(
// 	new JwtStrategy(
// 		{
// 			secretOrKeyProvider: (req, rw, done) => done(null, process.env.SECRETE),
// 			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// 		},
// 		(payload, done) => {
// 			done(null, payload);
// 		}
// 	)
// );

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
