//Producto Agotado

let btnAgotado = document.getElementById("btn-agotado");
btnAgotado.addEventListener("click",()=>{
   Swal.fire({
      text:"Este producto no se encuentra disponible",
      icon:"error",
      confirm:"Aceptar",
      confirmButtonColor:"#FD5D9D",
   });
});


