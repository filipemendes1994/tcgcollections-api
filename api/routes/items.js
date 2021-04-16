const controller = require('../controllers/items')();

module.exports = (app) => {
  app.route('/api/v1/items').post(controller.create);
  app.route('/api/v1/items/:id').post(controller.upsert);
  app.route('/api/v1/items/:id').delete(controller.delete);
};
