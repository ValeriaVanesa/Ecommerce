const usuario = require('../../models/usersModels');
const bcrypt = require('bcrypt');
const token=require('../../jwt');
const jwt= require('jsonwebtoken');

require('../../database/conexion');
require("dotenv").config();

function crearUsuarioFromulario(req,res){
    res.render('crearUsuario');
}

function usuariosLoginFormulario(req,res){
    res.render('users');
}


//LoginUsuario
const loginUsuarioPost = async(req,res)=>{

    const {email, password} = req.body;

    const datos={
     email:email,
     password:password
   }
   
    try{
        let loginUser = await usuario.findOne({email});

        if(!loginUser){
            return res.send({
                error:true,
                code:1,
                message:"El usuario no existe"
            })
        }
      
        const validacionContraseña = bcrypt.compareSync(password, loginUser.password);

        if(validacionContraseña){
            const jsonToken = token.crearToken(email)
       
            return res.send({
                error:false,
                code: 0,
                data: { email, jsonToken , rol: loginUser.rol},
                message:"",
            })
        }
            
    }catch(error){
        return res.send({
            error:true,
            code:2,
            message:error
        });
    }
}

const showUsers = async(req, res)=>{
    const usuarios = await clientes.find()
    res.send(usuarios);
}
    
const crearUsuarioPost = async (req,res) => {

    const {  nombre, apellido, fechaNacimiento, dni , email, password}  = req.body;
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento:fechaNacimiento,
        dni:dni,
        email:email,
        password: password,
        rol: "usuario"
    }

    try {
        
        let datosUsuario = await usuario.findOne({ email });
        
        if(datosUsuario){
            res.send({
                error: true,
                code: 1,
                message: "Ya existe el usuario."
            })
        }

        datosUsuario = new usuario(datos);

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

const redireccionUsusarioLogeado = (req, res) => { 
    const { redirect_email, redirect_jwt, redirect_rol } = req.body;
    if (redirect_rol == 'usuario') {
        res.header('auth-token', redirect_jwt).redirect("/")
    } else if (redirect_rol == 'admin') { 
        res.header('auth-token', redirect_jwt).redirect("/admin")
    }
};
 

module.exports = {
    crearUsuarioFromulario,
    usuariosLoginFormulario,
    loginUsuarioPost,
    showUsers,
    crearUsuarioPost,
    redireccionUsusarioLogeado
}
  