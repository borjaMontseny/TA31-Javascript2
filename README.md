# TA31 - Javascript 2
Actividades de la UD31 JavaScript II

## Ejercicio 11
![image](https://user-images.githubusercontent.com/68342939/172027162-9bae7675-0343-4fbe-9d6b-72291c7f13d1.png)
<br>
![image](https://user-images.githubusercontent.com/68342939/172027177-43dd2f0b-3e9a-41f8-a3ca-374affc33c55.png)

## Ejercicio 12

## Ejercicio 13
![image](https://user-images.githubusercontent.com/68342939/172027312-d90dd5d0-8dbd-4844-b4d0-3f33443a3160.png)
<br>
![image](https://user-images.githubusercontent.com/68342939/172027211-6c3db6a3-9b24-4bc1-bf23-e517af8423ff.png)

## Ejercicio 14
![image](https://user-images.githubusercontent.com/68342939/172027249-8cc29665-5910-448c-bdc9-1fc77b122556.png)
<br>
![image](https://user-images.githubusercontent.com/68342939/172027264-d3e2eb91-a017-41e5-a868-73ad22e86f4f.png)
<br>
```js script
var operandoA;
var operandoB;
var operacion;

function init() {
    // variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    // eventos
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function (e) {
        resetear();
    }

    suma.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    division.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function (e) {
        operandoB = resultado.textContent;
        resolver();
    }

}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break;

        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB)
            break;

        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB)
            break;

        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB)
            break;

    }

    resetear();
    resultado.textContent = res;
}
```
## Ejercicio 15
![image](https://user-images.githubusercontent.com/68342939/172027368-09fac8ca-4415-4ab8-a1a4-fc12ec021d74.png)

## Ejercicio 16
![image](https://user-images.githubusercontent.com/68342939/172027395-470a4d39-f696-4220-a464-467461f979ea.png)
```js script
function actual() {
    fecha = new Date(); //Actualizar fecha.
    hora = fecha.getHours(); //hora actual
    minuto = fecha.getMinutes(); //minuto actual
    segundo = fecha.getSeconds(); //segundo actual
    if (hora < 10) { //dos cifras para la hora
        hora = "0" + hora;
    }
    if (minuto < 10) { //dos cifras para el minuto
        minuto = "0" + minuto;
    }
    if (segundo < 10) { //dos cifras para el segundo
        segundo = "0" + segundo;
    }
    //ver en el recuadro del reloj:
    mireloj = hora + " : " + minuto + " : " + segundo;
    return mireloj;
}

function actualizar() { //función del temporizador
    mihora = actual(); //recoger hora actual
    mireloj = document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML = mihora; //incluir hora en elemento
}

setInterval(actualizar, 1000); //iniciar temporizador
```

