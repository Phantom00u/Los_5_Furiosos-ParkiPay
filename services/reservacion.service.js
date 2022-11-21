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
      idUser: id
    });

    return reservation
  }

  async MongoGetAllViaUser(limit, filter){
    let reservation = await Model.find(filter)

    if (reservation == undefined || reservation == null)
    throw boom.notFound(errNotFound);
    else if (reservation.length <= 0)
    throw boom.notFound(errEmpty);

    if(limit){
      reservation = reservation.filter((item,index)=> item && index < limit);
    }

    return reservation;
  }

  async MongoGetAllViaEstablishment(limit, filter){
    let reservation = await Model.find(filter)

    if (reservation == undefined || reservation == null)
    throw boom.notFound(errNotFound);
    else if (reservation.length <= 0)
    throw boom.notFound(errEmpty);

    if(limit){
      reservation = reservation.filter((item,index)=> item && index < limit);
    }

    return reservation;

  }

  async mongoUpdate(id, body) {

    let reservationToChange = await Model.findOne({
      idUser: id
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