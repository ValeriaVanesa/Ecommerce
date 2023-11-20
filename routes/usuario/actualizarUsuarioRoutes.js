const express =require("express");
const router= express.Router();

const{

    actualizarUsuario,
    actualizandoUsuario,
    usuarioActualizado

}= require('../../controllers/usuario/ActualizarUsuarioControllers');
router.get('/',actualizarUsuario)
router.post('/modify',actualizandoUsuario)
router.post('/modifing',usuarioActualizado)



 

module.exports =router;