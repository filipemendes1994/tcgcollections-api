const Collection = require('../models/collection')();
const Owner = require('../models/owner')();

Owner.Collection = Owner.hasMany(Collection);

module.exports = () => ({
  list: async (req, res) => res.status(200).json(await Owner.findAll()),
  create: async (req, res) => {
    const { name, occupation, latitude, longitude, bio } = req.query;
    return res
      .status(200)
      .json(await Owner.create({ name, occupation, latitude, longitude, bio }));
  },
  item: async (req, res) =>
    res.status(200).json(
      await Owner.findByPk(req.params.id, {
        include: { association: Owner.Collection },
      })
    ),
  upsert: async (req, res) => {
    const { name, occupation, latitude, longitude, bio } = req.query;
    return res
      .status(200)
      .json(
        await Owner.update(
          { name, occupation, latitude, longitude, bio },
          { where: { id: req.params.id } }
        )
      );
  },
  delete: async (req, res) =>
    res.status(200).json(await Owner.destroy({ where: { id: req.params.id } })),
});
