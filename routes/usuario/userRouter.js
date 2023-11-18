const express = require('express');
const router = express.Router();
const {
    
    usuarios,
   loginUsuario,
 
}= require('../../controllers/usuario/usersControllers')

router.get('/',usuarios);
router.post('/login',loginUsuario);



module.exports = router;