const clientes= require('../../models/usersModels');
const path = require('path');
require('../../database/conexion');
require("dotenv").config();


function admin(req,res){
    res.render('admin');

}

function logout(req,res){
    return res.clearCookie("auth_token").redirect("/");
}

module.exports= {
    admin,
    logout

   
}