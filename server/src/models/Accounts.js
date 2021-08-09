import mongoose from "mongoose";
import bcrypt from "bcrypt";

const accountSchema = new mongoose.Schema({
  platform: {
    type: String,
    default: "n/a",
  },

  username: {
    type: String,
    required: [true, "Provide a username"],
  },

  email: {
    type: String,
    trim: true,
    required: [true, "Provide a email"],
  },

  password: {
    type: String,
    required: [true, "Provide a password"],
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  dateAdded: {
    type: String,
    default: new Date().toDateString(),
  },
});

accountSchema.pre("save", async function (next) {
  const account = this;
  const salt = await bcrypt.genSalt();

  if (account.isModified("password")) {
    account.password = await bcrypt.hash(account.password, salt);
  }

  next();
});

export default mongoose.model("Accounts", accountSchema);
