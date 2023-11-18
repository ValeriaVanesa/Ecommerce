const mongoose = require('mongoose');
const {Schema} = require ('mongoose');
const bcrypt = require ('bcrypt');


const usuarioSchema = new Schema({
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
dni:{
    type:String,
    required:true
},

password:{
    type:String,
    required:true
    },

rol:{
    type:String,
    required:true
    },

timestamp:{
    type:Date,
    default:Date.now()
}



});
usuarioSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts=>{
        bcrypt.hash(this.password,salts).then(hash=>{
            this.password = hash;
            next();
        }).catch(error=> next(error));
   
    }).catch(error => next(error));
});



const usuario = mongoose.model('usuario',usuarioSchema);
module.exports = usuario;


//module.exports = mongoose.model('clientes',userSchema);


