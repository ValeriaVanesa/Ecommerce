const express =require("express");
const router= express.Router();

const{
perfumeMomParis
}= require('../../controllers/productos/perfumeMomParisControlers.js')

router.get('/', perfumeMomParis);




 

module.exports =router;