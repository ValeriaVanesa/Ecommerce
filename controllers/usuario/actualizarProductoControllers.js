const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const producto= require('../../models/productoModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const mongoose = require('mongoose');
const path = require('path');

require('../../database/conexion');




function actualizarProducto (req,res){



    res.render('actualizar',{
        title:'actualizar producto',
      
    })

  }  



const productoActualizado = async (req,res)=>{

    console.log(req.params._id);
    const id = req.params._id


try{
    const update = await producto.findOne(id);
    console.log(update);

    return res.render('actualizar',{
        title:'actualizar producto',
        update,
        id
    })
}catch(error){

}
}

module.exports={
    actualizarProducto,
    productoActualizado
}