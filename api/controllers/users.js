const Collection = require('../models/collection')();
const User = require('../models/user')();

User.Collection = User.hasMany(Collection);

module.exports = () => ({
  list: async (req, res) => res.status(200).json(await User.findAll()),
  create: async (req, res) => {
    const {
      name,
      occupation,
      latitude,
      longitude,
      bio,
      profilePicture,
    } = req.body;

    return res.status(200).json(
      await User.create({
        name,
        occupation,
        latitude,
        longitude,
        bio,
        profilePicture,
      })
    );
  },
  item: async (req, res) =>
    res.status(200).json(
      await User.findByPk(req.params.id, {
        include: { association: User.Collection },
      })
    ),
  upsert: async (req, res) => {
    const { name, occupation, bio, profilePicture } = req.body;
    return res
      .status(200)
      .json(
        await User.update(
          { name, occupation, bio, profilePicture },
          { where: { id: req.params.id } }
        )
      );
  },
  delete: async (req, res) =>
    res.status(200).json(await User.destroy({ where: { id: req.params.id } })),
});
