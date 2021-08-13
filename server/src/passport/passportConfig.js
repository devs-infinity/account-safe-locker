import User from "../models/User";
import bcrypt from "bcryptjs";
import passportLocal from "passport-local";

const localStrategy = passportLocal.Strategy;

export default function (passport) {
  passport.use(
    new localStrategy((usernameOrEmail, password, done) => {
      // First try finding with username:
      User.findOne({ username: usernameOrEmail }, (err, user) => {
        if (err) throw err;
        if (user) {
          bcrypt.compare(password, user.password, (err, success) => {
            if (err) throw err;
            if (success) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        } else {
          // Try finding with email:
          User.findOne({ email: usernameOrEmail }, (err, user) => {
            if (err) throw err;
            if (user) {
              bcrypt.compare(password, user.password, (err, success) => {
                if (err) throw err;
                if (success) {
                  return done(null, user);
                } else {
                  return done(null, false);
                }
              });
            } else {
              return done(null, false);
            }
          });
        }
      });
    })
  );

  passport.serializeUser((user, callback) => {
    callback(null, user.id);
  });

  passport.deserializeUser((id, callback) => {
    User.findOne({ _id: id }, (err, user) => {
      callback(err, user);
    });
  });
}
