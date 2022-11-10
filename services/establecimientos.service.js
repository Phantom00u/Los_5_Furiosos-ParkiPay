const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('../utils');

class EstablecimientosService {
  constructor() {
    this.Establecimientos = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.Establecimientos.push({
        isActive: faker.datatype.boolean(),
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        parkinglot: faker.datatype.number({ min: 10, max: 100}),
        address: faker.address.streetAddress(),
        image: faker.image.imageUrl(),
      });
    }
  }

  //FAKER
  
  //-----------------------------------------------------------------------------------
  //Crear Establecimientos
  async create(data) {
    const newEstablecimiento = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.Establecimientos.push(newEstablecimiento);
    return newEstablecimiento;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        var Establecimientos = this.Establecimientos.slice(0, limit);
        if (Establecimientos.length > 0) {
          resolve(Establecimientos);
        } else {
          rejected('');
        }
      }, 5000);
    });
  }

  //-----------------------------------------------------------------------------------
  //Encontrar Establecimientos activos
  findActiveEstablecimientos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activeEstablecimientos = this.Establecimientos.filter((x) => x.isActive === true);
        resolve(activeEstablecimientos);
      }, 2000);
    });
  }

  //-----------------------------------------------------------------------------------
  //Encontrar Establecimiento por ID
  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const Establecimiento = this.Establecimientos.find((item) => item.id === id);
    //NOT FOUND
    validateData(Establecimiento, NOTFOUND, 'No encontrado', (data) => !data);
    validateData(
      Establecimiento,
      CONFLICT,
      'CONFLICTO, El Establecimiento esta bloqueado.',
      (data) => data.isActive == false
    );
    return Establecimiento;
  }

  //-----------------------------------------------------------------------------------
  //Actualizar Establecimiento por ID
  async update(id, changes) {
    const index = this.Establecimientos.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Establecimiento no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentEstablecimiento = this.Establecimientos[index];
    this.Establecimientos[index] = {
      ...currentEstablecimiento,
      ...changes,
    };
    return this.Establecimientos[index];
  }

  async updateComplete(id, changes) {
    const index = this.Establecimientos.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Establecimiento no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentEstablecimiento = this.Establecimientos[index];
    this.Establecimientos[index] = {
      id: currentEstablecimiento.id,
      ...changes,
    };
    return this.Establecimientos[index];
  }

  //-----------------------------------------------------------------------------------
  //Borrar Establecimiento por ID
  async delete(id) {
    const index = this.Establecimientos.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Establecimiento no encontrado');
    }
    this.Establecimientos.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}


module.exports = EstablecimientosService;