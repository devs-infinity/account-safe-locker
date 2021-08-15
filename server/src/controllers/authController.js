import User from "../models/User";
import bcrypt from "bcryptjs";
import passport from "passport";

export const signUpController = async (req, res) => {
  // Temporary missing input validation
  if (!req.body.username || !req.body.email || !req.body.password) {
    const inputs = [req.body.username, req.body.email, req.body.password];
    const inputNames = ["username", "email", "password"];
    const missingValues = inputNames.filter((name, i) => {
      if (inputs[i] === "") {
        console.log(i);
        return true;
      } else {
        return false;
      }
    });
    // Temporary missing input validation

    let message = `Missing values: ${missingValues}`;

    return res.send(message);
  }

  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
};

export const logInController = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
};

export const currentUserController = async (req, res) => {
  res.send(req.user);
};

export const logOutController = async (req, res) => {
  req.logout();
  return res.send("Logged out");
};
