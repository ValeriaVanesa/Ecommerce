const express =require("express");
const router= express.Router();


const {
   administracionUsuarios,
   mostrarClientes, 
   crearClientes,
   

}= require('../../controllers/usuario/adminUsuariosControllers');


router.get('/', administracionUsuarios);
router.get('/showClients', mostrarClientes);
router.post('/crear',crearClientes)

module.exports= router;