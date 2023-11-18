
//RUTA NEWSLETTER

const express =require("express");
const router= express.Router();

const { 
    compra,
    showproducts ,
    nuevaCompra,
        actualizarCompra,
        eliminarCompra
} = require("../../controllers/usuario/compraControllers");

router.get('/',compra);
router.get('/mostrarProductos',showproducts )
router.post('/',nuevaCompra);
router.put( '/:id', actualizarCompra);
router.delete( '/:id', eliminarCompra);

module.exports = router;
 