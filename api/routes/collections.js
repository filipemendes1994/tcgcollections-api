module.exports = app => {
  const controller = require('../controllers/collections')();
  app.route('/api/v1/collections').get(controller.list);
  app.route('/api/v1/collections').post(controller.create);
  app.route('/api/v1/collections/:id').get(controller.item);
  app.route('/api/v1/collections/:id').post(controller.upsert);
  app.route('/api/v1/collections/:id').delete(controller.delete);
}
