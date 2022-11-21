const faker = require('faker');
const boom = require('@hapi/boom');
const { validateData, NOTFOUND, CONFLICT } = require('../utils');
const Model = require('../models/reservation.model.js');

class ReservacionesService {
  
  async mongoCreate(data){
    const model = new Model(data);
    await model.save();
    return data;
  }

  async mongoReadOne(id){
    const reservation = await Model.findOne({
      _id: id
    });

    return reservation
  }

  async mongoUpdate(id, body) {

    let reservationToChange = await Model.findOne({
      _id: id
    });

    if (reservationToChange == undefined || reservationToChange == null)
      throw boom.notFound(errNotFound);
    if (reservationToChange.length <= 0)
      throw boom.notFound(errEmpty);

   let originalReservation = {
      parkinglot: reservationToChange.parkinglot,
      cost: reservationToChange.cost,
      arrivingTime: reservationToChange.arrivingTime,
    };

    const {
      parkinglot, cost, arrivingTime
    } = body;

    if (parkinglot)
    reservationToChange.parkinglot = parkinglot;
    if (cost)
    reservationToChange.cost = cost;
    if (arrivingTime)
    reservationToChange.arrivingTime = arrivingTime;
    

    await reservationToChange.save();

    return {
      old: originalReservation,
      new: reservationToChange
    };
  }

  async mongoDelete(id){
   
    let Reservation = await Model.findOne({
      _id: id
    });

    const {
      deletedReservation
    } = await Model.deleteOne({
      _id: id
    });

    return Reservation; 
    //eh? xd

  }

 
}


module.exports = ReservacionesService;