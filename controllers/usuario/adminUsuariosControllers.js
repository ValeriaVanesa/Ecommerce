const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const clientes= require('../../models/usersModels');
const bcrypt = require('bcrypt');
const { rmSync } = require("fs");
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
require('../../database/conexion');


function administracionUsuarios(req,res){

    res.render('administracionUsuario');


    
}

//mostrar
const mostrarClientes = async(req,res)=>{

    const usuarios = await clientes.find()
    res.send(usuarios)
}

const crearClientes= async(req,res)=>{
    const {  nombre, apellido, fechaNacimiento, dni , email, password}  = req.body;
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento:fechaNacimiento,
        dni:dni,
        email:email,
        password:password
    }

    try {
        
        datosUsuario = new clientes(datos);
        console.log(datosUsuario)
        
        await datosUsuario.save();
        if(datosUsuario){
            return res.render('tablaUsuarios');

           }
        }catch(error){
            console.log(error);
            return res.json({
                message:'error al crear usuario'
               }) 
             
        }
    }

//editar

   










module.exports= {
administracionUsuarios,
mostrarClientes,
crearClientes,


   
}