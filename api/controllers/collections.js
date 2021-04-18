const mintNFT = require('../../scripts/mint-nft');
const Badge = require('../models/badge')();
const Collection = require('../models/collection')();
const Item = require('../models/item')();

console.log(mintNFT);
Collection.Items = Collection.hasMany(Item);
Collection.Badges = Collection.hasMany(Badge);

module.exports = () => ({
  list: async (req, res) =>
    res.status(200).json(
      await Collection.findAll({
        where: { type: req.query.type },
        include: [
          { association: Collection.Items },
          { association: Collection.Badges },
        ],
      })
    ),
  create: async (req, res) => {
    const {
      name,
      description,
      type,
      latitude,
      longitude,
      items,
      userId,
    } = req.body;
    const collection = await Collection.create({
      name,
      description,
      type,
      latitude,
      longitude,
      userId,
    });

    const secureItems = items.map((it) => ({
      ...it,
      collectionId: collection.id,
    }));
    const storedItems = await Item.bulkCreate(secureItems);

    const transactionId = await mintNFT();
    const badge = await Badge.create({
      name: 'Most seen collection in 2021',
      color: '#CCCC00',
      transactionId,
      collectionId: collection.id,
    });
    return res
      .status(200)
      .json({ collection, items: storedItems, badges: [badge] });
  },
  item: async (req, res) =>
    res.status(200).json(
      await Collection.findByPk(req.params.id, {
        include: [
          { association: Collection.Items },
          { association: Collection.Badges },
        ],
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
