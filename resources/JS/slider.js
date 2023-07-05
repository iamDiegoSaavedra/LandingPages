var slider = document.getElementById("MyRange");
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




let fname = document.getElementById("fname");
let age = document.getElementById("MyRange");
let radio = document.getElementsByName("gender");
let check = document.getElementById("chkterminos");


let msgAge = document.getElementById("alertMyRange");
let msgGender = document.getElementById("alertMyRadio");
let msgCheck = document.getElementById("alertCheck");


function validation (){
    
    
    let comprobacion = []

    if(validarNombre(fname.value) != true){
        fname.classList.add("is-invalid");
        comprobacion.push(false);
    }
    else{
        comprobacion.push(true);
    }

    if(validarEdad(age.value) != true){
       msgAge.classList.remove("d-none");
       comprobacion.push(false);
    }else{
        comprobacion.push(true);
    }


    if(validarGender(radio) != true){
        msgGender.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        comprobacion.push(true);
    }

    if(validarCheck(check) != true){
        msgCheck.classList.remove("d-none");
        comprobacion.push(false);
    }else{
        comprobacion.push(true);
    }
    

    //comprobacion array
    let cont = 0;

    for(i=0;i<=comprobacion.length;i++){
        //buscamos si hay falsos, si lo hay cont aumenta en 1
        if(comprobacion[i] == false)
        cont+=1
    }

    //si una comprobacion es falsa no se envian los datos
    if(cont != 0){
        console.log(cont);
        return false;
    }

    return true;
    
}

document.querySelector("form").addEventListener("submit", (e) =>{
    e.preventDefault();

    let msgFel = document.getElementById("modal-body");

    let max = 100;
    let min = 10
    let num = 0
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if(validation() != false){

        $("#confirmModal").modal("show");
        msgFel.innerHTML = "Felicitaciones! " + fname.value  + "<br>" +
        "Edad: " + age.value + "<br>" +
        "Eres el participante N°" + num;
        document.querySelector("form").reset();
        output.innerHTML = "0"
    }
    
});


function validarGender(radio){
    for (var i = 0; i <  radio.length; i++) {
        if (radio[i].checked) {
          console.log(radio[i].value);
          return true;
          break;
        }
    }

    return false;

}


function validarNombre(fname){
    //Expresion Regular Solo Letras
    const ExpRegLetras = "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";

    if( fname.length < 3 || fname.match(ExpRegLetras) == null){
        console.log("nombre esta vacío");
        return false;
    }
    else{
        console.log(fname);
        return true;
    }
};

function validarEdad(edad){
    if(edad == 0){
        msgAge.innerHTML = "debe arrastrar boton para elegir una edad."
        console.log("edad no puede ser 0.");
        return false;
    }
    else if(edad < 18){
        msgAge.innerHTML = "debe ser mayor de edad."
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
        console.log("acepta")
        return true;
    }
    console.log("no acepta")
    return false;
}