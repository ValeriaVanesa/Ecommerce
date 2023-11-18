const mongoose = require('mongoose');
const {Schema} = require ('mongoose');
const bcrypt = require ('bcrypt');


const crearCuentaSchema= new Schema({
nombre:{
   type:String,
   required:true
    },
apellido:{
    type:String,
    required:true
    },  
fechaNacimiento:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},


password:{
    type:String,
    required:true
},
timestamp:{
    type:Date,
    default:Date.now()
}



});
clienteSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts=>{
        bcrypt.hash(this.password,salts).then(hash=>{
            this.password = hash;
            next();
        }).catch(error=> next(error));
   
    }).catch(error => next(error));
});






module.exports = mongoose.model('cuentasClientes',crearCuentaSchema);


