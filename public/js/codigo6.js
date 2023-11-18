$(document).ready(function () {
   $("#button2").click(async (e) => {
      e.preventDefault();
      //validar inputs
      
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const fechaNacimiento = document.getElementById("fechaNacimiento");
      const dni = document.getElementById("dni");
      const email = document.getElementById("email");

      const password = document.getElementById("password");



      const regexNombre = new RegExp("^[a-zA-Z]{4,16}$");
      const regexApellido = new RegExp("^[a-zA-Z]{4,16}$");
      const regexDni = new RegExp("^[0-9]{8,8}");
      const regexEmail = new RegExp("[^@\s]+@[^@\s]+\.[^@\s]+");
      const regexContraseña = new RegExp("^[a-zA-Z]{4,16}$");
      

      let validacion;
      validacion = validar(nombre, regexNombre);
      if (!validacion) return false;
      validacion = validar(apellido, regexApellido);
      if (!validacion) return false;
      validacion = validar(dni, regexDni);
      if (!validacion) return false;
      validacion = validar(email, regexEmail);
      if (!validacion) return false;
      validacion = validar(password, regexContraseña);
      if (!validacion) return false;

      //envio el formulario

      let data = {
         nombre: nombre.value,
         apellido: apellido.value,
         fechaNacimiento: fechaNacimiento.value,
         dni: dni.value,
         email: email.value,

         password: password.value

      };

      let url = '/cuenta/new';

      $("#loading_form ").show();

      let response = await crearCuenta(url, data);

      $("#loading_form ").hide();

      if (response.error == true) {
         if (response.code == 1) {
            Swal.fire({
               icon: 'warning',
               title: 'Cuidado',
               text: 'Usuario ya existente'
            });
         }

         if (response.code == 2) {
            Swal.fire({
               icon: 'error',
               title: 'Ocurrio un error',
               text: 'No se pudo crear la cuenta de usuario.'
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
         $('#formularioCarga')[0].reset();
      }
   });
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
   } else {
      input.classList.remove('inputError');
      input.classList.add('inputSuccess');
      return true;
   }
}

const crearCuenta = async (url, data) => {

   const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
   });
   const responseJson = await response.json();
   return responseJson;
 }