
$(document).ready(function(){

   $("#loginSubmit").click( async function (e) {
      e.preventDefault();





//Validar inputs


      const email = document.getElementById("email");
      const password = document.getElementById("password");
    

      const regexContra = new RegExp("^[a-zA-Z]{4,16}$");
      const regexEmail = new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+");


      let validacion;
      validacion = validar(email, regexEmail);
      if (!validacion) return false;
      validacion = validar(password, regexContra);
      if (!validacion) return false;


      //envio el formulario

    let data = {
      email:email.value,
      password: password.value
    }

    let url = '/users/login';

    $("#loading_form ").show();

    let response = await crearUsuario(url, data);

    $("#loading_form ").hide();
   console.log(response);
    if (response.error == true) {
       if (response.code == 1) {
         Swal.fire({
             icon: 'warning',
             title: 'Cuidado',
             text: 'Usuario no existente'
          });
       }

       if (response.code == 2) {
          Swal.fire({
             icon: 'error',
             title: 'Ocurrio un error',
             text: 'Error al iniciar sesión.'
          });
       }
    } else if(response.error == false) {
      
         Swal.fire({
         position: 'center',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 2500
         });
         //RESETEAR FORMULARIO Y COLORES VERDE DE LAS CLASES

       //REENVIAR SEGUN QUE USUARIO ES
       let form_redict = document.getElementById("form_redirect");
       let redirect_email = form_redict.querySelector('#redirect_email');
       let redirect_jwt = form_redict.querySelector('#redirect_jwt');
       let redirect_rol = form_redict.querySelector('#redirect_rol');
       redirect_email.value = response.data.email;
       redirect_jwt.value = response.data.jsonToken;
       redirect_rol.value = response.data.rol;
       form_redict.action = "/users/redirect";
       form_redict.method = "POST";
       form_redict.submit();
      }
   
   })
 });
 


const validar = (input, expreg) => { 

   let resultado = expreg.test(input.value)  
   
   if (!resultado) {
      input.classList.remove('inputSuccess');
      input.classList.add('inputError');
      input.focus();
      Swal.fire({
         title: "Error",
         text: `El campo ${input.id.toUpperCase()} no tiene un formato válido`,
         icon: "error",
         confirmButtonText: "Aceptar",
         confirmButtonColor: "#FD5D9D",
      })
      
      return false;
      
   } 
   
   else {
      input.classList.remove('inputError');
      input.classList.add('inputSuccess');
      return true;
   }
 }
 const crearUsuario= async (url, data) => {

   const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
   });
   const responseJson = await response.json();
   return responseJson;
 }