import Accounts from "../models/Accounts";

export const createAccount = async (req, res) => {
    const acc = new Accounts({
        ...req.body,
        owner: req.user._id
    })
    try {
        await acc.save()
        res.send(acc)
    } catch (e) {
        res.status(500).send(e)
  }
};

// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
export const getAccounts = async (req, res) => {
    const sort = {};

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    await req.user
      .populate({
        path: "accounts",
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    res.send(req.user.accounts);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getAccountById = async (req, res) => {

  try {
    const data = await Accounts.findById(req.params.id);
    data
      ? res.status(200).json(data)
      : res.status(404).json({ msg: "Account entry not found" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateAccount = async (req, res) => {
  const accountsKeys = Object.keys(req.body);
  const allowedUpdates = ["platform", "username", "email", "password"];
  const isValid = accountsKeys.every((data) => allowedUpdates.includes(data));

  if (!isValid) {
    return res.status(400).send({
      errorMessage: "Invalid Update Field",
    });
  }

  try {
    const account = await Accounts.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!account) {
      return res.status(400).send({
        errorMessage: "Account entry not found",
      });
    }
    accountsKeys.forEach((data) => (account[data] = req.body[data]));
    await account.save();
    res.send(account);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const deleteAccount = async (req, res) => {
    try {
        const account = await Accounts.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        
        if (!account) {
          res.status(404).send();
        }

        res.send(account);
    } catch (e) {
        res.status(500).send(e)
    }
}
