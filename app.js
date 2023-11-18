const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const path=require('path');

const hbs = require('hbs')
require('./database/conexion');







const condicionesRoutes = require('./routes/usuario/condicionesRoutes');
const calzadosRoutes = require('./routes/productos/calzadosRoutes');

const perfumesRoutes = require('./routes/productos/perfumesRoutes');

const zapatillaConverseRoutes = require('./routes/productos/zapatillaConverseRoutes');
const shoesvansblackRoutes = require('./routes/productos/shoesvansblackRoutes');
const zapatillaVansBordoRoutes = require('./routes/productos/zapatillaVansBordoRoutes');
const botaVansRoutes = require('./routes/productos/botaVansRoutes');
const zapatillaVansAzulRoutes = require('./routes/productos/zapatillaVansAzulRoutes');

const perfumeTeaseRoutes = require('./routes/productos/perfumeTeaseRoutes');
const perfumeBomshellRoutes = require('./routes/productos/perfumeBombshellRoutes');
const perfumeBlushRoutes=require('./routes/productos/perfumeBlushRoutes');
const perfumeLancomeRoutes=require('./routes/productos/perfumeLancomeRoutes');
const perfumeMomParisRoutes=require('./routes/productos/perfumeMomParisRoutes');
const perfumeMarcJacobsRoutes=require('./routes/productos/perfumeMarcJacobsRoutes');


const usersRoutes = require('./routes/usuario/userRouter');

const compraRoutes = require('./routes/usuario/compraRoutes');
const contactoRoutes = require('./routes/usuario/contactoRoutes');
const cuentaRoutes = require('./routes/usuario/cuentaRoutes');
const indexRoutes = require('./routes/usuario/indexRoutes');
const adminRoutes= require('./routes/usuario/adminRoutes');
const administracionUsuarioRoutes = require('./routes/usuario/administracionUsuariosRoutes');
const registroProductosRoutes = require('./routes/usuario/registroProductosRoutes');
const loginAdminRoutes= require('./routes/usuario/loginAdminRoutes');
const tablaUsuariosRoutes = require('./routes/usuario/tablaUsuariosRoutes');
const listaProductosRoutes = require('./routes/usuario/listaProductosRoutes');
const eliminarProductoRoutes= require('./routes/usuario/eliminarProductoRoutes');
const actualizarRoutes = require('./routes/usuario/actualizarRoutes');


const PORT = process.env.PORT;






app.use(cors());

app.use(express.json());


app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));


app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'./views'));

hbs.registerPartials(path.join(__dirname,'./views/partials'));






app.use('/condiciones',condicionesRoutes)
app.use('/calzados',calzadosRoutes);

app.use('/perfumes',perfumesRoutes);

app.use('/zapatillaConverse',zapatillaConverseRoutes);
app.use('/zapatillanegraVans',shoesvansblackRoutes);
app.use('/vansBordo',zapatillaVansBordoRoutes);
app.use('/botaVans',botaVansRoutes);
app.use('/vansAzul',zapatillaVansAzulRoutes);

app.use('/perfumeTease',perfumeTeaseRoutes);
app.use('/perfumeBombshell',perfumeBomshellRoutes);
app.use('/perfumeBlush',perfumeBlushRoutes);
app.use('/perfumeLancome',perfumeLancomeRoutes);
app.use('/perfumeMomParis',perfumeMomParisRoutes);
app.use('/perfumeMarcJacobs',perfumeMarcJacobsRoutes);




app.use('/users', usersRoutes);
app.use('/admin',adminRoutes);
app.use('/inicio',indexRoutes);
app.use('/compra',compraRoutes);
app.use('/contacto',contactoRoutes);
app.use('/cuenta', cuentaRoutes);
app.use('/administracionUsuarios',administracionUsuarioRoutes);
app.use('/formProductos',registroProductosRoutes);
app.use('/loginAdmin',loginAdminRoutes);
app.use('/condiciones',condicionesRoutes);
app.use('/tablaUsuarios',tablaUsuariosRoutes);
app.use('/listaProductos',listaProductosRoutes);
app.use('/eliminarProducto',eliminarProductoRoutes);
app.use('/actualizarProducto',actualizarRoutes);



app.get('/',(req,res)=>{
  res.render('index');
})




















app.listen(PORT,(err)=>{
    if(err) {throw err}
    console.log(`servidor corriendo en el puerto:  ${PORT}`);
});