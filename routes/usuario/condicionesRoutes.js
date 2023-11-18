const express =require("express");
const router= express.Router();

const{
   condiciones
}= require('../../controllers/usuario/condicionesControlers.js')

router.get('/', condiciones);




 

module.exports =router;