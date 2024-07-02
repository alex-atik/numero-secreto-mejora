let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
    console.log (numeroSecreto);

function asignarTextoElemento (elemento, texto ) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número secreto en ${intentos} ${(intentos == 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acierta//
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número es menor");
        } else {
            asignarTextoElemento("p", "El número es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

//llamar un elemento por ID poner # porque está con queryselector (selector genérico)//
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números...
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p" , "Ya se sortearon todos los números posibles");
    } else {
        //si el número generado está incluído en la lista..
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
function condicionesIniciales() {
    asignarTextoElemento ("h1", "Descubre el número secreto!");
    asignarTextoElemento ("p" , `Escribe un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //esta función servirá para: limpiar caja
    limpiarCaja();
    //Indicar msj de intervalo de #´s
    //generar # aleatorio
    //restaurar número intentos//
    condicionesIniciales();
    //deshabilitar botón 'NUEVO JUEGO'
    document.querySelector("#reiniciar").setAttribute("disabled",true);
}
condicionesIniciales();