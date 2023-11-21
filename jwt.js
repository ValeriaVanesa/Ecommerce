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





const auth = (req, res, next, token) => {
    if(!token){
        console.log('No hay token');
        return res.redirect("/users/login");
    }
    try{
        const tokenmacht = jwt.verify(token, clavejwt);
        console.log(`El token es valido: ${tokenmacht.exp}`);
    }catch(err){
        return res.redirect("/users/login");
    }
    next();
}

module.exports={
    crearToken,
    auth
}
    