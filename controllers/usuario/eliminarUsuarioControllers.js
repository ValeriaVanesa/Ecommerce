const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const usuarios= require('../../models/adminClientesModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const mongoose = require('mongoose');
const path = require('path');

require('../../database/conexion');




function eliminarUsuario(req,res){

    res.render('eliminarUsuario')
    }
   


const usuarioEliminado= async (req,res)=>{

    console.log(req.params._id)
      
        const id = req.params._id
    


    try{
       
    
    let eliminar = await usuarios.findOneAndDelete(id )
    console.log(eliminar)
  if(eliminar){
    res.render('eliminarUsuario',{
        title:'Usuario eliminado'
    });
  }else{
    res.send({
        error: true,
        code: 1,
        message: "error al eliminar usuario"
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
    eliminarUsuario,
    usuarioEliminado
    
}