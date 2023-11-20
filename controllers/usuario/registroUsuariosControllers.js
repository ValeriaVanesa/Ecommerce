const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const usuarios= require('../../models/adminClientesModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
;
require('../../database/conexion');


function formUsuarios(req,res){

    res.render('formUsuarios');


    
}

const registroUsuario = async (req,res)=>{
    const { nombre , apellido, email }  = req.body;

    const datos = {
     nombre:nombre,
     apellido:apellido,
     email:email,
     
      
    }

    try {
        
        datosUsuario = new usuarios(datos);
        console.log(datosUsuario)
        
        await datosUsuario.save();
        if(datosUsuario){
            return res.render('formUsuarios');

           }
        }catch(error){
            console.log(error);
            return res.json({
                message:'error al crear usuario'
               }) 
             
        }
    }

module.exports={
    formUsuarios,
    registroUsuario
}