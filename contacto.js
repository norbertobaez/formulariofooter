
function validarFormulario() {
    
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",(e)=>{

});

var	nombres =/^[a-zA-ZÀ-ÿ\s]{1,40}$/; 

	
const inputNombre = document.getElementById("nombre").value;
const inputEmail = document.getElementById("email").value;

if (!nombres.test(inputNombre)) {
    alert('Por favor ingrese un nombre valido.');
   return false;
  }
   
   if (!validarEmail(inputEmail)) {
    alert('Por favor ingrese un correo electronico valido.');
  return false;
  }
  return true;
}

function validarEmail(inputEmail) {
  var	correo =  /\S+@\S+\.\S+/;
  return correo.test(inputEmail);
}