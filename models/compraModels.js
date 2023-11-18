const mongoose = require('mongoose');
const {Schema} = require ('mongoose');




const compraSchema= new Schema({

nombre:{
    type:String,
    required:true
},
precio:{
    type:Number,
    required:true
},
precioTotal:{
    type:Number,
    required:false
}



});

module.exports = mongoose.model('Compras',compraSchema);
