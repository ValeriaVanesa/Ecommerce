
const mongoose = require('mongoose');
const {Schema} = require ('mongoose');


const contactoSchema= new Schema({
    nombre:{
       type:String,
       required:true
        },
   
    email:{
        type:String,
        required:true
        },  
    telefono:{
        type:String,
        required:true
    },
   comentario:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    }
    
    
    });


module.exports=mongoose.model('Contactos',contactoSchema)