/*
Slider range edad
*/
var slider = document.getElementById("edadRange");
var output = document.getElementById("edadvalue");

output.innerHTML = slider.value;

slider.oninput = function () {
    if(slider.value <= 90){
        output.innerHTML = this.value;
    }
    else{
        output.innerHTML = "+90";
    }
}


/*
* Funcion Submit
*/
document.querySelector("form").addEventListener("submit", (e) =>{
    e.preventDefault();

  
    if(validaForm() != false){   
        $("#confirmaModal").modal("show");
        document.querySelector("form").reset();
        nombres.classList.remove("is-valid");
        apellido.classList.remove("is-valid");
        email.classList.remove("is-valid");
        output.innerHTML = 0;
    }

});



/*
Validación Datos
*/
// Variables Globales (input)
let nombres = document.getElementById("nombre"); 
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let genero = document.getElementsByName("gender");
let edad = document.getElementById("edadRange");
let check = document.getElementById("checkAcepta");
/* Variables Globales (alert - mensajes) */
let msgNombre = document.getElementById("alertNombre");
let msgApellido = document.getElementById("alertApellido");
let msgEmail = document.getElementById("alertEmail");
let msgGenero = document.getElementById("alertGenero");
let msgEdad = document.getElementById("alertEdad");
let msgCheck = document.getElementById("alertCheck");

function validaForm(){

    //creamos un array que almacera datos boolean
    let comprobacion = []

    if(validarNombre(nombres.value) != true){
        nombres.classList.add("is-invalid");
        msgNombre.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        nombres.classList.remove("is-invalid");
        nombres.classList.add("is-valid");
        msgNombre.classList.add("d-none");
    }

    if(validarApellido(apellido.value) != true){
        apellido.classList.add("is-invalid");
        msgApellido.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
        msgApellido.classList.add("d-none");
    }

    if(validarEmail(email.value) != true){
        email.classList.add("is-invalid");
        msgEmail.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        msgEmail.classList.add("d-none");
    }

    if(validarGenero(genero) != true){
        msgGenero.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        msgGenero.classList.add("d-none");
    }
    
    if(validarEdad(edad.value) != true){
        msgEdad.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        msgEdad.classList.add("d-none");
    }

    if(validarCheck(check) != true){
        msgCheck.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        msgCheck.classList.add("d-none");
    }


    //comprobación del array
    let cont = 0;

    for(i=0;i<=comprobacion.length;i++){
        //buscamos si hay falsos, sí los hay cont aumenta en 1
        if(comprobacion[i] == false)
        cont+=1
    }

    //si una comprobación es falsa no se envían los datos
    if(cont != 0){
        console.log(cont);
        return false;
    }

    return true;
}

/*
* Funciones de Validacion
*/
function validarNombre(nombre){
    //Expresion Regular Solo Letras
    const ExpRegLetras = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

    if( nombre.length < 3 || nombre.match(ExpRegLetras) == null){
        console.log("nombre esta vacío");
        return false;
    }
    else{
        console.log(nombre);
        return true;
    }
}

function validarApellido(apellido){
    //Expresion Regular Solo Letras
    const ExpRegLetras = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

    if( apellido.length < 3 || apellido.match(ExpRegLetras) == null){
        console.log("apellido esta vacío");
        return false;
    }
    else{
        console.log(apellido);
        return true;
    }
}

function validarEmail(email){
    const ExpRegEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if(email.match(ExpRegEmail) == null){
        console.log("apellido esta vacío");
        return false;
    }

    console.log(email)
    return true;
}

function validarGenero(radio){
    for (var i = 0; i <  radio.length; i++) {
        if (radio[i].checked) {
          console.log(radio[i].value);
          return true;
          break;
        }
    }

    return false;
}

function validarEdad(edad){
    if(edad == 0){
        msgEdad.innerHTML = "* debe arrastrar boton para elegir una edad."
        console.log("edad no puede ser 0.");
        return false;
    }
    else if(edad < 18){
        msgEdad.innerHTML = "* debe ser mayor de edad."
        console.log("debe ser mayor de edad");
        return false;
    }
    else{
        console.log(edad)
        return true;
    }
};

function validarCheck(check){
    if(check.checked){
        console.log(check.checked)
        return true;
    }

    console.log(check.checked)
    return false;

}