const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const id = Joi.string().alphanum();
const username = Joi.string();
const name = Joi.string();
const password = Joi.string();
const telephone = Joi.number();
const email = Joi.string();
const paypal = Joi.string();

const loginUserDto = Joi.object({
    username: username,
    password: password,
});

const createUserDto = Joi.object({
    username: username.required(),
    name: name.required(),
    password: password.required(),
    telephone: telephone.required(),
    email: email.required(),
    paypal: paypal.required(),
});

const updateUserDto = Joi.object({
    id: id,
    username: username,
    name: name,
    password: password,
    telephone: telephone,
    email: email,
    paypal: paypal,
});

const getUserId = Joi.object({
  id: id.required(),
});

module.exports = {
    loginUserDto,
    createUserDto,
  updateUserDto,
  getUserId,
};