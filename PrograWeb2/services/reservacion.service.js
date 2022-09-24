const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('../utils');

class ReservacionesService {
  constructor() {
    this.Reservaciones = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.Reservaciones.push({
        code: faker.random.alpha(15),
        id: faker.datatype.uuid(),
        idEst: faker.datatype.uuid(),
        idUser: faker.datatype.uuid(),
        parkinglot: faker.datatype.number({ min: 1, max: 100}),
        cost: faker.datatype.number({ min: 20, max: 40}),
        arrivingTime: faker.datatype.number({ min: 1, max: 24})
      });
    }
  }

  //FAKER
  
  //-----------------------------------------------------------------------------------
  //Crear Reservaciones
  async create(data) {
    const newReservacion = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.Reservaciones.push(newReservacion);
    return newReservacion;
  }

  find(limit) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => {
        var Reservaciones = this.Reservaciones.slice(0, limit);
        if (Reservaciones.length > 0) {
          resolve(Reservaciones);
        } else {
          rejected('');
        }
      }, 5000);
    });
  }

  //-----------------------------------------------------------------------------------
  //Encontrar Reservaciones activos
  findActiveReservaciones() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activeReservacion = this.Reservaciones.filter((x) => x.isActive === true);
        resolve(activeReservacion);
      }, 2000);
    });
  }

  //-----------------------------------------------------------------------------------
  //Encontrar Reservacion por ID
  async findOne(id) {
    //const name = this.getTotal(); PRUEBA DE ERROR DE TRY Y CATCH
    const Reservacion = this.Reservaciones.find((item) => item.id === id);
    //NOT FOUND
    validateData(Reservacion, NOTFOUND, 'No encontrada', (data) => !data);
    validateData(
        Reservacion,
      CONFLICT,
      'CONFLICTO, La reservación esta bloqueada.',
      (data) => data.isActive == false
    );
    return Reservacion;
  }

  //-----------------------------------------------------------------------------------
  //Actualizar Reservacion por ID
  async update(id, changes) {
    const index = this.Reservaciones.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Reservacion no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentReservacion = this.Reservaciones[index];
    this.Reservaciones[index] = {
      ...currentReservacion,
      ...changes,
    };
    return this.Reservaciones[index];
  }

  async updateComplete(id, changes) {
    const index = this.Reservaciones.findIndex((item) => item.id === id);

    if (index === -1) throw boom.notFound('Reservacion no encontrado');
    //throw new Error('Product not found'); Forma tradicional

    var currentReservacion = this.Reservaciones[index];
    this.Reservaciones[index] = {
      id: currentReservacion.id,
      ...changes,
    };
    return this.Reservaciones[index];
  }

  //-----------------------------------------------------------------------------------
  //Borrar Reservacion por ID
  async delete(id) {
    const index = this.Reservaciones.findIndex((item) => item.id == id);
    if (index === -1) {
      if (index === -1) throw boom.notFound('Reservacion no encontrado');
    }
    this.Reservaciones.splice(index, 1);
    return {
      message: 'Eliminado',
      id,
    };
  }
}


module.exports = ReservacionesService;