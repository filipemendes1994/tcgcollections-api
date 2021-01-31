module.exports = () => {
  const collectionsDB = require('../data/collections.json');
  return {
    list: (req, res) => res.status(200).json(collectionsDB)
  };
}
