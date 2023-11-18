const express =require("express");
const router= express.Router();

const{
 vansBordo
}= require('../../controllers/productos/zapatillaVansBordoControlers.js')

router.get('/', vansBordo);




 

module.exports =router;