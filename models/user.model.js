const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    nombre: String,
    usuario: String,
    correo: String,
    telefono: String,
    credencial: String,
    activo: Boolean
});
const model = mongoose.model('usuario', userSchema);
module.exports = model;
