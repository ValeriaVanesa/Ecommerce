const mongoose = require('mongoose');

require('dotenv').config();

const  MONGO_URL_LOCAL= process.env.MONGO_URL_LOCAL;
const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;

const conection = mongoose.connect(MONGO_URL_ATLAS).then(()=>{
   console.log('Conexion a la base de datos exitosa');
}).catch(err =>console.log(err));

module.exports = conection;
