const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')();

const SECRET = 'z-U0|F<A^maP6hq';

module.exports = () => ({
  register: async (req, res) => {
    const { email, password } = req.body;
    const alreadyExists = await User.findOne({
      where: { email },
    });

    if (alreadyExists) {
      return res.status(409).json();
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password: hashedPassword });
    const token = jwt.sign({ user }, SECRET);

    return res.status(200).json({ token });
  },

  oauth: async (req, res) => {
    const { token, email, name, profilePicture } = req.body;
    let user = await User.findOne({
      where: { email },
    });

    if (!user) {
      user = await User.create({ email, name, profilePicture });
    }

    const jwtToken = jwt.sign({ user, token }, SECRET);
    return res.status(200).json({ token: jwtToken });
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
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
    const { email } = req.body;
    return res.status(200).json(await User.destroy({ where: { email } }));
  },
});
