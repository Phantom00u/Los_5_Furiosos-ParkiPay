const faker = require('faker');
class UserService {
  constructor() {
    this.rolUsuario = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.rolUsuario.push({
        id: faker.datatype.uuid(),
        rolUsuario: faker.word,
      });
    }
  }
  find(limit) {
    return this.rolUsuario.slice(0, limit);
  }
  findOne(id) {
    return this.rolUsuario.find((item) => item.id === id);
  }
  //FAKER
  create(data) {
    const newRolUsuario = {
      id: faker.random.uuid(),
      ...data,
    };
    this.rolUsuario.push(newRolUsuario);
    return newRolUsuario;
  }
  async update(id, changes) {
    const index = this.rolUsuario.findIndex((item) => item.id === id);
    var currentRolUsuario = this.rolUsuario[index];
    this.rolUsuario[index] = {
      ...currentRolUsuario,
      ...changes,
    };
    return this.rolUsuario[index];
  }

  async delete(id) {
    const index = this.rolUsuario.findIndex((item) => item.id == id);
    this.rolUsuario.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = UserService;