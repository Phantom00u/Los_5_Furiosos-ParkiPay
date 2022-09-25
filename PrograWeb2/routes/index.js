const express = require('express');
//const UserRouter = require('./login.router');
const loginService = require('./login.router');
const registerService = require('./register.router');
const reserveService = require('./reservar.router');
const tarifaService = require('./tarifas.router');
const rolUsuarioService = require('./rolUsuario.router');
const commentsService = require('./comments.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/login', loginService);
  router.use('/signin', registerService);
  router.use('/reserve', reserveService);
  router.use('/tarifas', tarifaService);
  router.use('/rolUsuario', rolUsuarioService);
  router.use('/comments', commentsService);
  //router.use('/users', productsRouter);
  //router.use('/categories', productsRouter);
}

module.exports = routerApi;
