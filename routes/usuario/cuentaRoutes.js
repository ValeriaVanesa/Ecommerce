

const express =require("express");
const router= express.Router();

const { crearCuenta,
        showUsers,
        nuevaCuenta,
        actualizarCuenta,
        eliminarCuenta
    
     
         
} = require("../../controllers/usuario/cuentaControllers");



router.get('/',crearCuenta);
router.get('/show',showUsers)
router.post('/new',nuevaCuenta);
router.put('/update', actualizarCuenta);
router.delete('/delete', eliminarCuenta);


    

module.exports =router;