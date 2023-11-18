const express =require("express");
const router= express.Router();

const{
 vansAzul
}= require('../../controllers/productos/zapatillaVansAzulControlers.js')

router.get('/', vansAzul);




 

module.exports =router;