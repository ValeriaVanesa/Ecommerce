
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
router.put( '/update', actualizarCompra);
router.delete( '/delete', eliminarCompra);

module.exports = router;
 