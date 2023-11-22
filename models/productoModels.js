const mongoose = require('mongoose');
const {Schema} = require ('mongoose');




const productoSchema= new Schema({
imagen:{
   type:String,
    required:true
},
nombre:{
    type:String,
    required:true
},
precio:{
    type:Number,
    required:true
},
 cantidad: {
     type: Number,
     requerid: true
    }



});


const Productos = mongoose.model('producto',productoSchema);
module.exports = Productos;