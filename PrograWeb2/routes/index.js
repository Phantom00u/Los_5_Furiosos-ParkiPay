const express = require('express');
const establecimientosRouter = require('./establecimientos.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/establecimientos', establecimientosRouter);
  //router.use('/users', productsRouter);
  //router.use('/categories', productsRouter);
}

module.exports = routerApi;
