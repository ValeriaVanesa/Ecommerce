const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const usuarios= require('../../models/adminClientesModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');


require('../../database/conexion');


function tablaUsuarios(req,res){

    const clientes =  usuarios.find({});
   res.render('tablaUsuarios',{
        title:'Listado de usuarios', clientes
    })

    
}

const listarClientes = async(req,res)=>{

    try{
        const clientes = await usuarios.find({});
     

        return res.render('tablaUsuarios',{
            title:'Listado de usuarios', clientes
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
tablaUsuarios,
listarClientes

   
}