const dotenv= require('dotenv');
dotenv.config();
const jwt= require('jsonwebtoken');
const clavejwt = process.env.CLAVETOKEN;

const crearToken = (email, password)=>{
const token = jwt.sign({
email:email,
password:password
   
},clavejwt,{
    expiresIn:'1h'
})
return token;
}





const auth=(req,res,next)=>{
const token = req.header('auth-token');
console.log(req.header('auth-token'));
 if(!token){
    console.log('No hay token');
    return res.json({
        mensaje:'no hay acceso a la aplicacion' 
        })

 }
try{
    const tokenmacht = jwt.verify(token, clavejwt);
 console.log(`El token es valido: ${tokenmacht.exp}`);
}catch(err){
    return res.json({
        mensaje:'No hay acceso a la aplicacion '
    })

}
    next();
}

module.exports={
    crearToken,
    auth
}
    