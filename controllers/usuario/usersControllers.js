
require("dotenv").config();
const clientes= require('../../models/usersModels');
const bcrypt = require('bcrypt');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const mongoose = require('mongoose');
const path = require('path');
require('../../database/conexion');
const token=require('../../jwt');
const jwt= require('jsonwebtoken');




function usuarios(req,res){

    res.render('users');


    
}


//-----------------------------------------------------------------------------------------------------------------------------------------






//LoginUsuario

const loginUsuario= async(req,res)=>{


    const {email, password} = req.body;
    console.log(` Los datos del usuario son email: ${email} y contraseña:${password}`);

    const datos={
     email:email,
     password:password
   }

   
    try{
        let loginUser = await clientes.findOne({email});
    

        console.log(`${loginUser}` )


        if(!loginUser){
           
                return res.send({
                error:true,
                code:1,
                message:"El usuario no existe"
            })
           
        }
      
        const validacionContraseña = bcrypt.compareSync(password, loginUser.password);
        console.log(`${validacionContraseña}`);
  

        

        if(loginUser){
            const jsonToken = token.crearToken(email)
            console.log(`el token generado es ${jsonToken}`);
            res.header('auth-token',jsonToken).send({
                email:email,
            })
         
       
       //return res.send({
            //error:false,
           // code:0,
           // message:"Bienvenido",
          
       // })
    }
            
        }catch(error){
            return res.send({
                error:true,
                code:2,
                message:error
            });
        }
        
       
     
    }
    
   
 

module.exports= {
    usuarios,
  
    loginUsuario
    
}
  