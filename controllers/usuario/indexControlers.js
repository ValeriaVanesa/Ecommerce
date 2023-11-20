const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const suscripciones= require('../../models/suscripcionModels');

const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const mongoose = require('mongoose');
const path = require('path');

require('../../database/conexion');


function inicio(req,res){

    res.render('index');


    
}


//Mostrar suscripciones


const mostrarSuscripciones = async(req, res)=>{
    const usuarios = await suscripciones.find()
   res.send(usuarios);
        
        
      
    }

//crear suscripcion

const nuevaSuscripcion= async (req,res) => {

    const { email}  = req.body;

    const data = {
       
     email:email
        
    }

    try{
        
        datosSuscripcion = new suscripciones(data);
        await datosSuscripcion.save();
  
        return res.json({
            error: false,
            code: 0,
            message: 'Bienvenido.' 
        })

       
      
    }catch(error){
        return res.json({
            error: true,
            code: 1,
            message: 'Error al suscribirse.' 
        });
    }
}
        


//Actualizar suscripcion

const actualizarSuscripcion = async(req,res)=>{
    try{
        let datosSuscripcion = await suscripciones.findOne({_id:req.body.id});
        if(!datosSuscripcion){
            return res.send({
                error:true,
                code:1,
                message:"No se encontro el email a modificar."
            })
        }


        const usuarios = await suscripciones.updateOne({_id:req.body.id},
        {
            $set:{
            
                email:req.body.email
                
                
            }
        })
        if(usuarios.modifiedCount > 0){
            return res.send({
                error:false,
                data:"",
                message:"Se modifico correctamente el email."
            });
        }else{
            return res.send({
                error:true,
                data:"",
                message:"No se modifico el email."
            });
        }
    }catch(error){
        return res.send({
            error:true,
            data:"",
            message:error
        });
    }
}
  
//Eliminar suscripcion 
const eliminarSuscripcion = async(req,res)=>{
    const usuarios = await suscripciones.deleteOne({_id:req.body.id})
    if(usuarios.deletedCount > 0){
       res.send({
            error:false,
            data:"",
            message:"Se elimino correctamente el email."
        });

    }else{
      res.send({
            error:true,
            data:"",
            message:"No se encontro el email para eliminarlo."
        });
    }
    console.log(usuarios.deletedCount);
}








module.exports= {
inicio,
mostrarSuscripciones,
nuevaSuscripcion,
actualizarSuscripcion,
eliminarSuscripcion


   
}