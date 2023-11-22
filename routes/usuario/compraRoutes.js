
//RUTA NEWSLETTER

const express =require("express");
const router= express.Router();

const { 
    compra,
    showproducts ,
    nuevaCompra,
       
} = require("../../controllers/usuario/compraControllers");

router.get('/',compra);
router.get('/mostrarProductos',showproducts )
router.post('/',nuevaCompra);

module.exports = router;
 