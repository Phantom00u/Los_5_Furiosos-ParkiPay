const faker = require('faker');
const boom = require('@hapi/boom');
const UserModel = require('../models/user.model.js');

const errNotFound = "No se logró encontrar lo buscado";
const errEmpty = "Aún no hay cuentas creadas";

class UserService {
  constructor() {
    this.user = [];
    this.generate();
  }

  async mongoCreate(data){
    const model = new UserModel(data);
    await model.save();
    return data;
  }

  async mongoLogin(limit, filter){
    let users = await UserModel.find(filter);

    if (users == undefined || users == null)
      throw boom.notFound(errNotFound);
    if (users.length <= 0)
      throw boom.notFound(errEmpty);

    users = users.filter((item, index) => item && index < limit);

    return users;
  }

  async mongoUpdate(body) {

    let userToChange = await UserModel.findOne({
      _id: body['id']
    });

    if (userToChange == undefined || userToChange == null)
      throw boom.notFound(errNotFound);
    if (userToChange.length <= 0)
      throw boom.notFound(errEmpty);

    let originalUser = {
      nombre: userToChange.nombre,
      usuario: userToChange.usuario,
      correo: userToChange.correo,
      telefono: userToChange.telefono,
      credencial: userToChange.credencial
    };

    const {
      nombreC, usuarioC, correoC, telefonoC, credencialC
    } = changes;

    if (nombreC)
      userToChange.nombre = nombreC;
    if (usuarioC)
      userToChange.usuario = usuarioC;
    if (correoC)
      userToChange.correo = correoC;
    if (telefonoC)
      userToChange.telefono = telefonoC;
    if (credencialC)
      userToChange.credencial = credencialC;

    await userToChange.save();

    return true;
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.user.push({
        id: faker.datatype.uuid(),
        username: faker.name.firstName(),
        name: faker.commerce.productName(),
        password: parseInt(faker.commerce.price(), 10),
        telephone: faker.phone.telephone,
        email: faker.internet.email,
        paypal: faker.internet.email
      });
    }
  }
  find(limit) {
    return this.user.slice(0, limit);
  }
  findOne(username) {
    return this.user.find((item) => item.username === username);
  }
  //FAKER
  create(data) {
    const newUser = {
      id: faker.random.uuid(),
      ...data,
    };
    this.user.push(newUser);
    return newUser;
  }
  async update(id, changes) {
    const index = this.user.findIndex((item) => item.id === id);
    var currentUser = this.user[index];
    this.user[index] = {
      ...currentUser,
      ...changes,
    };
    return this.user[index];
  }

  async delete(id) {
    const index = this.user.findIndex((item) => item.id == id);
    this.user.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = UserService;
