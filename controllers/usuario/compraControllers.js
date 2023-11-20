
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const compras= require('../../models/compraModels');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const path=require('path');
const mongoose = require('mongoose');
const database = require ('../../database/conexion')


function compra (req,res){
    res.render('compra');
}

const showproducts = async(req, res)=>{
    const products = await compras.find()
     res.send(products); 
    }

//crear compra


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
        db.close();
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
     

   


//actualizar compra-------------------------------------------------------------------


const actualizarCompra = async(req,res)=>{
    let user= req.params.id;
    res.send(`<h1 style="color:green">Compra ${user} actualizada </h1>`);

    let { productos } = req.body;

    productos = JSON.parse(productos)

    let nombreProductos = ""
    let precioTotal = 0

    productos.forEach((product) =>{
        nombreProductos += product.nombre.trim() + ` $ ${product.precio} (${product.cantidad})\n`
        precioTotal = precioTotal + (product.precio * product.cantidad)
     });


     let conection =  mongoose.connect(MONGO_URL_ATLAS)
     const db = mongoose.connection;
    
    
    let paraActualizar ={
            compra: "Zapatilla Vans $ 13900 (1), Bota Vans $ 14900 (1) ",
           precioTotal: '28800'
    }
    
    let datoActualizado= {
        $set:{
            compra: 'Zapatilla Vans $13900 (1)',
            precioTotal: '13900'
    
        }
    };
    
    
    
     await db.collection('Compras').updateOne( paraActualizar,datoActualizado,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });
    




console.log(`Compra eliminada.. 
${nombreProductos}
Precio total = $ ${precioTotal}
`);

if( productos.length > 0 ){
  res.redirect('compraRealizada.html');
}else{ 
   res.redirect('error.html');
}

}


//eliminar compra-----------------------------------------------------------------------

const eliminarCompra = async (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Compra eliminada ${user}</h1>`);


  
    let conection =  mongoose.connect(MONGO_URL_ATLAS)
        const db = mongoose.connection;
        let paraEliminar ={
            compra: "Zapatilla Vans $ 13900 (1), Bota Vans $ 14900 (1) ",
           precioTotal: "28800"
          
        }
        
         await db.collection('Compras').deleteOne( paraEliminar,(err,res)=>{
            if (err) throw err,
        console.log(`datos eliminados en la coleccion clientes`);
        db.close();
         });
        



    }





    
     
   





    










module.exports= {
    compra,
    showproducts,
    nuevaCompra,
    actualizarCompra,
    eliminarCompra
   
}
