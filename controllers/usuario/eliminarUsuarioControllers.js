const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const usuarios= require('../../models/adminClientesModel');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const mongoose = require('mongoose');
const path = require('path');

require('../../database/conexion');




function eliminarUsuario(req,res){

    res.render('eliminarUsuario')
    }
   


const usuarioEliminado= async (req,res)=>{

    console.log(req.body)
      
    const id = req.body.id
    


    try{
       
        let eliminar = await usuarios.findByIdAndDelete(id)

        if(eliminar){
            res.redirect('/tablaUsuarios');
        } else {
          
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