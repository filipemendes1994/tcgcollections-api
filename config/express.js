const config = require('config');
const consign = require('consign');
const express = require('express');

module.exports = () => {
  const app = express();

  // Set app variables
  app.set('port', process.env.PORT || config.get('server.port'));

  // import data, controllers and routes to app
  consign({ cwd: 'api' })
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
