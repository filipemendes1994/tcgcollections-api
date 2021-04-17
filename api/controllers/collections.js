const Collection = require('../models/collection')();
const Item = require('../models/item')();

Collection.Items = Collection.hasMany(Item);

module.exports = () => ({
  list: async (req, res) => res.status(200).json(await Collection.findAll()),
  create: async (req, res) => {
    const { name, description, latitude, longitude, userId } = req.body;
    return res.status(200).json(
      await Collection.create({
        name,
        description,
        latitude,
        longitude,
        userId,
      })
    );
  },
  item: async (req, res) =>
    res.status(200).json(
      await Collection.findByPk(req.params.id, {
        include: { association: Collection.Items },
      })
    ),
  upsert: async (req, res) => {
    const { name, description, latitude, longitude } = req.body;
    return res
      .status(200)
      .json(
        await Collection.update(
          { name, description, latitude, longitude },
          { where: { id: req.params.id } }
        )
      );
  },
  delete: async (req, res) =>
    res
      .status(200)
      .json(await Collection.destroy({ where: { id: req.params.id } })),
});
