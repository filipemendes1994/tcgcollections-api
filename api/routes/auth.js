const controller = require('../controllers/auth')();

module.exports = (app) => {
  app.route('/api/v1/register').post(controller.register);
  app.route('/api/v1/login').post(controller.login);
  app.route('/api/v1/delete').delete(controller.register);
};
