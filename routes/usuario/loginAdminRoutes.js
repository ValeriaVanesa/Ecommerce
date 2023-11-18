const express =require("express");
const router= express.Router();

const{
    loginAdmin
}= require('../../controllers/usuario/loginAdminControlers');

router.get('/', loginAdmin);




 

module.exports =router;