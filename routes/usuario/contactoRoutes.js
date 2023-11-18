const express =require("express");
const router= express.Router();


const{
    contacto,
  
    nuevoContacto,
    actualizarContacto,
    eliminarContacto
}= require('../../controllers/usuario/contactoControllers');

router.get('/',contacto);

router.post('/nuevoContacto',nuevoContacto);
router.put( '/update', actualizarContacto);
router.delete( '/delete', eliminarContacto);


module.exports= router;