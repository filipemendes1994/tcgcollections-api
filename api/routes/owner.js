const controller = require('../controllers/owners')();

module.exports = (app) => {
  app.route('/api/v1/owners').get(controller.list);
  app.route('/api/v1/owners').post(controller.create);
  app.route('/api/v1/owners/:id').get(controller.item);
  app.route('/api/v1/owners/:id').post(controller.upsert);
  app.route('/api/v1/owners/:id').delete(controller.delete);
};
