const express =require("express");
const router= express.Router();

const{
 eliminarUsuario,
 usuarioEliminado


}= require('../../controllers/usuario/eliminarUsuarioControllers');

router.get('/', eliminarUsuario);
router.post('/:id',usuarioEliminado)



 

module.exports =router;