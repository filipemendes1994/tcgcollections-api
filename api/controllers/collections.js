const Collection = require('../models/collection')();
const Item = require('../models/item')();

Collection.Items = Collection.hasMany(Item);

module.exports = () => ({
  list: async (req, res) => res.status(200).json(await Collection.findAll()),
  create: async (req, res) => {
    const { shortDescription, longDescription, userId } = req.query;
    return res
      .status(200)
      .json(
        await Collection.create({ shortDescription, longDescription, userId })
      );
  },
  item: async (req, res) =>
    res.status(200).json(
      await Collection.findByPk(req.params.id, {
        include: { association: Collection.Items },
      })
    ),
  upsert: async (req, res) => {
    const { shortDescription, longDescription } = req.query;
    return res
      .status(200)
      .json(
        await Collection.update(
          { shortDescription, longDescription },
          { where: { id: req.params.id } }
        )
      );
  },
  delete: async (req, res) =>
    res
      .status(200)
      .json(await Collection.destroy({ where: { id: req.params.id } })),
});
