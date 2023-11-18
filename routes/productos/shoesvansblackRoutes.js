const express =require("express");
const router= express.Router();

const{
    zapatillanegraVans
}= require('../../controllers/productos/blackvansshoesControlers.js')

router.get('/',zapatillanegraVans );




 

module.exports =router;