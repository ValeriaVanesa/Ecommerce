
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const producto = require('../../models/productoModels');
const mongoose = require('mongoose');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;

const path = require('path');

async function compra (req, res) {
    const productos = await producto.find()
    res.render('compra', {
        productos: productos
    });
}

const showproducts = async(req, res)=>{
    const productos = await producto.find()
     res.send(productos); 
    }



const nuevaCompra = async (req,res)=>{

    let { productos } = req.body;
    console.log(productos);
    productos = JSON.parse(productos)

    let nombreProductos = ""
    let precioTotal = 0

    productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})\n`
        precioTotal = precioTotal + (product.precio * product.cantidad)
     });


    let conection =  mongoose.connect(MONGO_URL_ATLAS)
        const db = mongoose.connection;
       
       

        let infoCompra = {
            compra: nombreProductos,
             precioTotal: precioTotal
  
      
         };

          await db.collection('Compras' ).insertOne(infoCompra,(err,res)=>{
            if (err) throw err,
        console.log(`Informacion insertada en la coleccion productos:${res}`);
       
         });

         console.log(`Compra realizada... 
         ${nombreProductos}
         Precio total = $ ${precioTotal}
         `);
         
         if( productos.length > 0 ){
            return res.render('compraRealizada')
              



         }else{ 
             console.log('Error en la compra');
            
         }


    

       
         
         
        


    }
     

   













module.exports= {
    compra,
    showproducts,
    nuevaCompra
  
   
}
