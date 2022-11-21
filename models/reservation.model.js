const mongoose = require('mongoose');
const reservationSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    idUser: String,
    idEstacionamiento: String,
    parkinglot: String,
    cost: String,
    arrivingTime: String,
    activo: Boolean
});
const model = mongoose.model('reservaciones', reservationSchema);
module.exports = model;