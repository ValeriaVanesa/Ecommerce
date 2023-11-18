
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const clientes= require('../../models/usersModels');
const mongoose = require('mongoose');
const path = require('path');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;




function crearCuenta(req,res){
    res.render('crearCuenta');
}




//CRUD

//Mostrar--------------------------------------------------------------------------------------------------------------------





const showUsers = async(req, res)=>{
    const usuarios = await clientes.find()
     res.send(usuarios);
        
        
      
    }
        
    
  






//REVISAR
//crear cuenta---------------------------------------------------------------------------------------------------------------
const nuevaCuenta = async (req,res) => {

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
        
        let datosUsuario = await clientes.findOne({ email });
        
        if(datosUsuario){
            res.send({
                error: true,
                code: 1,
                message: "Ya existe el usuario."
            })
        }

        datosUsuario = new clientes(datos);

        await datosUsuario.save();

        res.send({
            error: false,
            code: 0,
            message: 'Su cuenta se ha creado correctamente'
        });

    }catch(error){
        return res.send({
            error: true,
            code: 2,
            message: error
        });  
    }

}











//actualizar------------------------------------------------------------------------------------

const actualizarCuenta = async (req, res) => {
    //BUSCAR EL USUARIO
    try {
        let datosUsuario = await clientes.findOne({ _id: req.body.id });
        if(!datosUsuario){
            return res.send({
                error: true,
                code: 1,
                message: "No se encontro el usuario a modificar."
            })
            // throw new Error("No se encontro el usuario para modificar.")
        }
        //MODIFICAR EL USUARIO
        const usuarios= await clientes.updateOne({_id:req.body.id},
            {
                $set:{
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    fechaNacimiento: req.body.fechaNacimiento,
                    dni: req.body.dni,
                    email: req.body.email,
                    password: req.body.password
                }
            })
        if (usuarios.modifiedCount > 0) {
            return res.send({
                error: false,
                data: "",
                message: "Se modifico correctamente el usuario."
            });
        } else {
            return res.send({
                error: true,
                data: "",
                message: "No se modifico nada del usuario encontrado."
            });
        }
    } catch (error) {
        return res.send({
            error: true,
            data: "",
            message: error
        });
    }
    
}

//eliminar---------------------------------------------------------------------------------------

const eliminarCuenta = async (req, res) => {

    const usuarios = await clientes.deleteOne({ _id: req.body.id })
    if (usuarios.deletedCount > 0) {
        res.send({
            error: false,
            data: "",
            message: "Se elimino correctamente el usuario."
        });
    } else { 
        res.send({
            error: true,
            data: "",
            message: "No se encontro el usuario para eliminarlo."
        });
    }
    console.log(usuarios.deletedCount);
}

module.exports={

   crearCuenta,
   showUsers,
   nuevaCuenta,
   actualizarCuenta,
   eliminarCuenta
}