const Item = require('../models/item')();

module.exports = () => ({
  create: async (req, res) => {
    const { items, collectionId } = req.body;
    const secureItems = items.map((it) => ({ ...it, collectionId }));
    return res.status(200).json(await Item.bulkCreate(secureItems));
  },
  upsert: async (req, res) => {
    const {
      isPrinciple,
      isGraded,
      name,
      aproximatedValue,
      collectionId,
    } = req.query;

    return res
      .status(200)
      .json(
        await Item.update(
          { isPrinciple, isGraded, name, aproximatedValue, collectionId },
          { where: { id: req.params.id } }
        )
      );
  },
  delete: async (req, res) =>
    res.status(200).json(await Item.destroy({ where: { id: req.params.id } })),
});
