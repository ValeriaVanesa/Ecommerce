const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const producto= require('../../models/productoModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
require('../../database/conexion');


function listaProductos (req,res) {
    const productos =  producto.find({});
    res.render('listaProductos',{
        title:'Listado de productos', productos 
    })
  
}

const listarProductos= async(req,res)=>{

   try{
        const productos = await producto.find({});
     

        return res.render('listaProductos',{
            title:'Listado de productos', productos 
        })
    }catch(error){
        res.send({
            error: true,
            code: 2,
            message: "Error"
        })
    
    }
}






module.exports= {
listaProductos,
listarProductos



   
}