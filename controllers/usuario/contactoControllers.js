// Formulario de contacto
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const contactos = require('../../models/contactoModels');
const mongoose = require("mongoose");



const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;

const path = require('path');

require('../../database/conexion');



function contacto (req,res){
    res.render('contacto')
}




//crear contacto


const nuevoContacto = async(req,res)=>{
    
    const { email, nombre, telefono, comentario  }  = req.body;
    console.log(`los datos recibidos son : email: ${email} , nombre: ${nombre}, telefono: ${telefono} y comentario: ${comentario}`);

    const data = {
        email:email,
        nombre: nombre,
        telefono:telefono,
        comentario:comentario
    }
    
    try{
        
        datosContacto = new contactos(data);
        await datosContacto.save();
        //LOGICA DEL ENVIO DE CORREO
        return res.json({
            error: false,
            code: 0,
            message: 'Su consulta se ha enviado correctamente.' 
        })

       
      
    }catch(error){
        return res.json({
            error: true,
            code: 1,
            message: 'Error al enviar la consulta.' 
        })
    }
}
        

//actualizar--------------------------------------------------------------------------


const actualizarContacto = async(req,res)=>{
    try{
        let datosContacto = await contactos.findOne({_id:req.body.id});
        if(!datosContacto){
            return res.send({
                error:true,
                code:1,
                message:"No se encontro el contacto a modificar."
            })
        }


        const usuarios = await contactos.updateOne({_id:req.body.id},
        {
            $set:{
                nombre: req.body.nombre,
                apellido:req.body.apellido,
                fechaNacimiento:req.body.fechaNacimiento,
                dni:req.body.dni,
                email:req.body.email,
                password:req.boy.password
                
            }
        })
        if(usuarios.modifiedCount > 0){
            return res.send({
                error:false,
                data:"",
                message:"Se modifico correctamente el contacto."
            });
        }else{
            return res.send({
                error:true,
                data:"",
                message:"No se modifico el contacto."
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

//eliminar----------------------------------------------------------------------------

 
const eliminarContacto = async(req,res)=>{
    const usuarios = await contactos.deleteOne({_id:req.body.id})
    if(usuarios.deletedCount > 0){
        res.send({
            error:false,
            data:"",
            message:"Se elimino correctamente la consulta."
        });

    }else{
        res.send({
            error:true,
            data:"",
            message:"No se encontro la consulta para eliminarla."
        })
    }
    console.log(usuarios.deletedCount);
}

module.exports={
contacto,

nuevoContacto,
actualizarContacto,
eliminarContacto
}