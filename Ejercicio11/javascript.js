// esta función nos da un random entre un mínimo y un máximo que damos por parámetro
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// lanzamos un dado
function lanzarDado(){
    var dado = randomInt(1, 6);
    return dado;
}

// sumamos dos dados
function suma2Dados(){
    var dado1 = lanzarDado();
    var dado2 = lanzarDado();
    var resultado = dado1 + dado2;
    return resultado;
}

// en un bucle for guardamos los resultados en un array
function guardarResultados(){
    var array = new Array(36000);
    for (let i = 0; i < array.length; i++) {
        array[i] = suma2Dados();
      }
      return array;
}
