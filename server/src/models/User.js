import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Accounts from "./Accounts";
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Provide a usename"],
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, "Provide a password"],
    minlength: 8,
  },
  dateCreated: {
    type: String,
    default: new Date().toDateString(),
  },

  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

userSchema.virtual("accounts", {
  ref: "Accounts",
  localField: "_id",
  foreignField: "owner",
});




userSchema.methods.generateToken = async function () {
  const user = this

  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET || 'testkey');
  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

userSchema.pre("save", async function (next) {
      const user = this;

      if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
      }
  next();
});

userSchema.pre('remove', async function (next) {
  const user = this
  await Accounts.deleteMany({ owner: user._id })
  next()
})

export default mongoose.model("User", userSchema);
