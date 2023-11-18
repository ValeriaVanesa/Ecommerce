const express = require('express');
const router = express.Router();

const {
    crearUsuarioFromulario,
    usuariosLoginFormulario,
    loginUsuarioPost,
    showUsers,
    crearUsuarioPost,
    redireccionUsusarioLogeado,
 
}= require('../../controllers/usuario/usersControllers')

router.get('/', crearUsuarioFromulario);
router.get('/login', usuariosLoginFormulario);
router.post('/login', loginUsuarioPost);
router.get('/show', showUsers);
router.post('/new', crearUsuarioPost);
router.post('/redirect', redireccionUsusarioLogeado);
// router.put('/update', actualizarCuenta);
// router.delete('/delete', eliminarCuenta);



module.exports = router;