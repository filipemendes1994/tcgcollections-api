const Collection = require('../models/collection')();

module.exports = () => ({
  list: async (req, res) => res.status(200).json(await Collection.findAll()),
  create: async (req, res) => {
    const { shortDescription, longDescription, ownerId } = req.query;
    return res
      .status(200)
      .json(
        await Collection.create({ shortDescription, longDescription, ownerId })
      );
  },
  item: async (req, res) =>
    res.status(200).json(await Collection.findByPk(req.params.id)),
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
