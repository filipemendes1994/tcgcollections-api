const controller = require('../controllers/users')();

module.exports = (app) => {
  app.route('/api/v1/users').get(controller.list);
  app.route('/api/v1/users').post(controller.create);
  app.route('/api/v1/users/:id').get(controller.item);
  app.route('/api/v1/users/:id').post(controller.upsert);
  app.route('/api/v1/users/:id').delete(controller.delete);
};
