$(document).ready(function () {

   $("#enviando").click(async function (e) {
      e.preventDefault();
      //validar inputs
      
      const nombre = document.getElementById("nombre");
      const email = document.getElementById("email");
      const telefono = document.getElementById("telefono");
      const comentario = document.getElementById("comentario");

      const regexNombre = new RegExp("^[a-zA-Z]{4,16}$");
      const regexEmail = new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+");
      const regexTelefono = new RegExp("^[0-9]{8,12}$");
      const regexComentario = new RegExp("^.{1,255}$");

      let validacion;
      validacion = validar(nombre, regexNombre);
      if (!validacion) return false;
      validacion = validar(email, regexEmail);
      if (!validacion) return false;
      validacion = validar(telefono, regexTelefono);
      if (!validacion) return false;
      validacion = validar(comentario, regexComentario);
      if (!validacion) return false;

      //envio el formulario

      let data = {
         nombre: nombre.value,
         telefono: telefono.value,
         comentario: comentario.value,
         email: email.value
      };

      let url = '/contacto/nuevoContacto';

      $("#loading_form ").show();

      let response = await crearContacto(url, data);

      $("#loading_form ").hide();

      if (response.error == true) {
         if (response.code == 1) {
            Swal.fire({
               icon: 'error',
               title: 'Error',
               text: response.message
            });
         }
      } else if (response.error == false) {
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 2500
         });
         //RESETEAR FORMULARIO Y COLORES VERDE DE LAS CLASES
         $('#form')[0].reset();
      }
   });
 
});


const validar = (input, expreg) => { 

   let resultado = expreg.test(input.value)  
   console.log(input);
   
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
   } else {
      input.classList.remove('inputError');
      input.classList.add('inputSuccess');
      return true;
   }
}

const crearContacto= async (url, data) => {

   const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
   });
   const responseJson = await response.json();
   return responseJson;
 }