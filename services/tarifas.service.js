const faker = require('faker');
class UserService {
  constructor() {
    this.tarifa = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.tarifa.push({
        id: faker.datatype.uuid(),
        tarifa: faker.random.word(),
      });
    }
  }
  find(limit) {
    return this.tarifa.slice(0, limit);
  }
  findOne(id) {
    return this.tarifa.find((item) => item.id === id);
  }
  //FAKER
  create(data) {
    const newTarifa = {
      id: faker.random.uuid(),
      ...data,
    };
    this.tarifa.push(newTarifa);
    return newTarifa;
  }
  async update(id, changes) {
    const index = this.tarifa.findIndex((item) => item.id === id);
    var currentTarifa = this.tarifa[index];
    this.tarifa[index] = {
      ...currentTarifa,
      ...changes,
    };
    return this.tarifa[index];
  }

  async delete(id) {
    const index = this.tarifa.findIndex((item) => item.id == id);
    this.tarifa.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}

module.exports = UserService;