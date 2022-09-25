const Joi = require('joi');

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO


/*isActive: faker.datatype.boolean(),
id: faker.datatype.uuid(),
name: faker.company.companyName(),
parkinglot: faker.datatype.number({ min: 10, max: 100}),
address: faker.address.streetAddress(),
image: faker.image.imageUrl(),*/

const id = Joi.string();
const isActive = Joi.boolean();
const name = Joi.string().min(3).max(50);
const address = Joi.string().min(3).max(100);
const parkinglot = Joi.number().integer().min(100);
const image = Joi.string();

//const createProductDto = Joi.object({
const createEstablecimiento = Joi.object({
  isActive: isActive.required(),
  name: name.required(),
  address: address.required(),
  parkinglot: parkinglot.required(),
  image: image.required(),
});

const updateEstablecimiento = Joi.object({
  isActive: isActive,
  name: name,
  address: address,
  parkinglot: parkinglot,
  image: image,
});

const getEstablecimientoID = Joi.object({
  id: id.required(),
});

module.exports = {
  createEstablecimiento,
  updateEstablecimiento,
  getEstablecimientoID,
};
