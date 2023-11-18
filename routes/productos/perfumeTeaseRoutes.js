const express =require("express");
const router= express.Router();

const{
  perfumeTease
}= require('../../controllers/productos/perfumeTeaseControlers.js')

router.get('/', perfumeTease);




 

module.exports =router;