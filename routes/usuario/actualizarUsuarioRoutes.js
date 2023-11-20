const express =require("express");
const router= express.Router();

const{

    actualizarUsuario,
    actualizandoUsuario,
    usuarioActualizado

}= require('../../controllers/usuario/ActualizarUsuarioControllers');
router.get('/',actualizarUsuario)
router.get('/:id',actualizandoUsuario)
router.post('/:id',usuarioActualizado)



 

module.exports =router;