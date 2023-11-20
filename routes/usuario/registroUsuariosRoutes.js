const express =require("express");
const router= express.Router();

const{
   
 registroUsuario,
 formUsuarios
}= require('../../controllers/usuario/registroUsuariosControllers');

router.get('/', formUsuarios);
router.post('/',registroUsuario)




 

module.exports =router;