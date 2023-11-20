const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const usuarios= require('../../models/adminClientesModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const mongoose = require('mongoose');
const path = require('path');

require('../../database/conexion');


function actualizarUsuario (req,res){
    res.render('actualizarUsuario')

    }


const actualizandoUsuario = async (req,res)=>{

    console.log(req.body.id);
    const id = req.body.id


try{
    const update = await usuarios.findById(id);
    console.log(update);

    return res.render('actualizarUsuario',{
        title:'actualizar Usuario',
        update,
        id
    
    })
}catch(error){
console.log(error)
}
}





const usuarioActualizado = async (req,res)=>{
    console.log(req.body.id);
    const id = req.body.id


try{
    const dato = req.body;
    console.log(dato);

    const actualizar = await usuarios.findByIdAndUpdate(id, dato);
    console.log(actualizar);

    return res.redirect('/tablaUsuarios');
}catch(error){
    console.log('error')
}

}














module.exports={
    actualizarUsuario,
    actualizandoUsuario,
    usuarioActualizado
}