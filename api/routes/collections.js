module.exports = app => {
  const controller = require('../controllers/collections')();
  app.route('/api/v1/collections').get(controller.list);
}
