const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const clientes= require('../../models/adminClientesModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
require('../../database/conexion');


function usuarioActualizado(req,res){

    res.render('usuarioActualizado');


    
}



module.exports= {
usuarioActualizado

   
}