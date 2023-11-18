const express =require("express");
const router= express.Router();

const{
    admin
}= require('../../controllers/usuario/adminControlers');

router.get('/', admin);




 

module.exports =router;