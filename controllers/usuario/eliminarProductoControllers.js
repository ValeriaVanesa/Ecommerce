const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const producto= require('../../models/productoModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const mongoose = require('mongoose');
const path = require('path');

require('../../database/conexion');




function eliminarProducto(req,res){

    res.render('eliminarProducto')
    }
   


const productoEliminado= async (req,res)=>{
    console.log(req.params._id)
      
        const id = req.params._id
    
    try{
    
    let eliminar = await producto.findOneAndDelete(id)
    console.log(eliminar)
  if(eliminar){
    res.render('eliminarProducto',{
        title:'Producto eliminado'
    });
  }else{
    res.send({
        error: true,
        code: 1,
        message: "error al eliminar producto"
    })
  }
       

       
    
    }catch(error){
        res.send({
            error: true,
            code: 2,
            message: "Error"
        })
    }
}








module.exports={
    eliminarProducto,
    productoEliminado
    
}