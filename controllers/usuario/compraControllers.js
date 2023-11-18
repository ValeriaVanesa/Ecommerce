
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
const Productos= require('../../models/compraModels');
const MONGO_URL_ATLAS= process.env.MONGO_URL_ATLAS;
const path=require('path');
const mongoose = require('mongoose');
const database = require ('../../database/conexion')


function compra (req,res){
    res.render('compra');
}

const showproducts = async(req, res)=>{
    const products = await Productos.find()
     res.send(products);
        
        
      
    }

//crear compra


const nuevaCompra = async (req,res)=>{

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
       
       

        let infoCompra = {
            compra: nombreProductos,
             precioTotal: precioTotal
  
      
         };

          await db.collection('Productos' ).insertOne(infoCompra,(err,res)=>{
            if (err) throw err,
        console.log(`Informacion insertada en la coleccion productos:${res}`);
        db.close();
         });

         console.log(`Compra realizada... 
         ${nombreProductos}
         Precio total = $ ${precioTotal}
         `);
         
         if( productos.length > 0 ){
           res.redirect('compraRealizada.html');
         }else{ 
             console.log('Error en la compra');
            
         }


    

       
         
         
        


    }
     

   


//actualizar compra-------------------------------------------------------------------



  


    











const actualizarCompra = async (req,res)=>{
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
   

    let datoActualizar= {
        $set:{
            compra: req.body.nombreProductos,
            precioTotal:req.body.precioTotal
    
        }
    };
    
    
    
     await db.collection('Productos').updateOne( datoActualizar,(err,res)=>{
        if (err) throw err,
    console.log(`documento actualizado en la coleccion clientes`);
    db.close();
     });





 


}


//eliminar compra-----------------------------------------------------------------------

const eliminarCompra =async (req,res)=>{
    let user = req.params.id;
    res.send(`<h1 style="color:red">Compra eliminada ${user}</h1>`);


    let conection =  mongoose.connect(MONGO_URL_ATLAS)
    const db = mongoose.connection;
        
       
        let paraEliminar ={
            
             compra: "Zapatilla Vans $ 13900 (1), Bota Vans $ 14900 (1) ",
                precioTotal: "28800"
            
                
            
           
          
        };
        
         await db.collection('Productos').deleteOne( paraEliminar,(err,res)=>{
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
