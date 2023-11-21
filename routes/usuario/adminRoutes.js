const express =require("express");
const router= express.Router();

const{
    admin,
    logout
}= require('../../controllers/usuario/adminControlers');

router.get('/', admin);
router.get('/logout', logout);



 

module.exports = router;