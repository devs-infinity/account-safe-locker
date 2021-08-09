import User from "../models/User";
import bcrypt from 'bcrypt'

// Display all users registered
export const getUsers = async (_, res) => {
  const data = await User.find();
  res.status(200).json(data);
};

// Display a user with a specific ID
export const getUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    data ? res.status(200).json(data) : res.status(404).json({ msg: "User with the given ID could not be found!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username})

    if (!user) {
      throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password)

    if (!isMatch) {
      throw new Error("Unable");
    }

    const token = await user.generateToken()
    res.send({ user, token });
  } catch (e) {
    res.status(500).send(e.message)
  }
}

export const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(data => data.token !== req.token)
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send(e)
  }
}

export const logoutAllUser = async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
};

export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = await newUser.generateToken();

    res.status(201).send({ registeredUser: newUser, token});
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getLoggedInUser = async (req, res) => {
  res.send(req.user);
};

export const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["username", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => req.user[update] = req.body[update]);
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(400).send();
  }
};
