const express =require("express");
const router= express.Router();

const{
   botaVans
}= require('../../controllers/productos/botaVansControlers.js')

router.get('/', botaVans);




 

module.exports =router;