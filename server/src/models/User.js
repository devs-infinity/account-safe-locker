import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

  accounts: {
    platform: {
      type: String,
      default: "n/a",
    },

    username: {
      type: String,
      default: "n/a",
    },

    email: {
      type: String,
      default: "n/a",
    },

    password: {
      type: String,
      required: [true, "Provide a password"],
    },

    dateAdded: {
      type: String,
      default: new Date().toDateString(),
    },
  },

  dateCreated: {
    type: String,
    default: new Date().toDateString(),
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  this.accounts.password = await bcrypt.hash(this.accounts.password, salt);

  next();
});

export default mongoose.model("user", userSchema);
