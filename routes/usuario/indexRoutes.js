const express =require("express");
const router= express.Router();

const { inicio,
        mostrarSuscripciones,
        nuevaSuscripcion,
        actualizarSuscripcion,
        eliminarSuscripcion
    
     
         
} = require("../../controllers/usuario/indexControlers");



router.get('/',inicio);
router.get('/mostrarSuscripciones',mostrarSuscripciones);
router.post('/nuevaSuscripcion',nuevaSuscripcion);
router.put('/update',actualizarSuscripcion);
router.delete('/delete',eliminarSuscripcion);







    

module.exports =router;