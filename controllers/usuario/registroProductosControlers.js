const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const producto= require('../../models/productoModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
require('../../database/conexion');


function formProductos(req,res){

    res.render('formProductos');


    
}

const registroProducto = async (req,res)=>{
    const {  imagen, nombre , precio, cantidad }  = req.body;

    const datos = {
       imagen:imagen,
       nombre:nombre,
        precio: precio,
       cantidad: cantidad
      
    }

    try {
        
        datosProducto = new producto(datos);
        console.log(datosProducto)
        
        await datosProducto.save();
        if(datosProducto){
            return res.render('formProductos');

           }
        }catch(error){
            console.log(error);
            return res.json({
                message:'error al crear producto'
               }) 
             
        }
    }





    


module.exports= {
formProductos,
registroProducto


   
}