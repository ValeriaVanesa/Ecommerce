const express =require("express");
const router= express.Router();

const{
perfumeLancome
}= require('../../controllers/productos/perfumeLancomeControlers.js')

router.get('/', perfumeLancome);




 

module.exports =router;