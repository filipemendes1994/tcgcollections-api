const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')();

const SECRET = 'z-U0|F<A^maP6hq';

module.exports = () => ({
  register: async (req, res) => {
    const { email, password } = req.query;
    const alreadyExists = await User.findOne({
      where: { email },
    });

    if (alreadyExists) {
      return res.status(409).json();
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    return res
      .status(200)
      .json(await User.create({ email, password: hashedPassword }));
  },

  login: async (req, res) => {
    const { email, password } = req.query;
    const account = await User.findOne({
      where: { email },
    });

    if (!account) {
      return res.status(404).json({ error: 'User not exists' });
    }

    const valid = await bcrypt.compare(password, account.password);
    if (!valid) {
      return res.status(404).json({ error: 'Wrong Password' });
    }

    const token = jwt.sign({ user: account }, SECRET);
    return res.status(200).json({ token });
  },

  delete: async (req, res) => {
    const { email } = req.query;
    return res.status(200).json(await User.destroy({ where: { email } }));
  },
});
