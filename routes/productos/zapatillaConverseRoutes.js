const express =require("express");
const router= express.Router();

const{
  zapatillaConverse
}= require('../../controllers/productos/zapatillaConverseControlers.js')

router.get('/', zapatillaConverse);




 

module.exports =router;