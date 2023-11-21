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
    res.render('actualizar')

    }


const actualizandoProducto = async (req,res)=>{

    const id = req.body.id_update


try{
    const update = await producto.findById(id);
    console.log(update);

    return res.render('actualizar',{
        title:'actualizar producto',
        update,
        id
    })
}catch(error){
console.log('error')
}
}





const productoActualizado = async (req,res)=>{
    const id = req.body.id


try{
    const dato = req.body;

    const actualizar = await producto.findByIdAndUpdate(id, dato);

    return res.redirect('/listaProductos')
}catch(error){
    console.log('error')
}

}














module.exports={
    actualizarProducto,
    actualizandoProducto,
    productoActualizado
}