const express = require('express');
//const UserRouter = require('./login.router');
const loginService = require('./login.router');
const registerService = require('./register.router');
const UserProfileRouter = require('./UserProfile.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/login', loginService);
  router.use('/signin', registerService);
  router.use('/UserProfile', UserProfileRouter);
  //router.use('/users', productsRouter);
  //router.use('/categories', productsRouter);
}

module.exports = routerApi;
