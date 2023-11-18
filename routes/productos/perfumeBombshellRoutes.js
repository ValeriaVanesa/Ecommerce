const express =require("express");
const router= express.Router();

const{
perfumeBombshell
}= require('../../controllers/productos/perfumeBombchellControlers.js')

router.get('/', perfumeBombshell);




 

module.exports =router;