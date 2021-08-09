import User from "../models/User";

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

export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ registeredUser: newUser });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
