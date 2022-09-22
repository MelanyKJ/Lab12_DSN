const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personaSchema = new Schema({
  nombre: String,
  apellido: String,
  edad:Number,
  telefono:Number
}, {versionKey:false})

module.exports = mongoose.model('personas', personaSchema)
