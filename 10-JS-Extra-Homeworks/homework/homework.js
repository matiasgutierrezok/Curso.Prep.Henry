// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = []
  for (var clave in objeto) {
    var subArray = [];
    subArray.push(clave);
    subArray.push(objeto[clave]);
    array.push(subArray);
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {}
  function agregar (letra) {
    if (!!objeto[letra]) {
      objeto[letra] = objeto[letra] + 1;
    } else {
      objeto[letra] = 1;
    }
  }
  for ( var i = 0; i < string.length; i++) {
    agregar(string[i]);
  }
  return objeto
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringMayus = '';
  var stringMinus = '';
  for ( var i = 0; i < s.length; i++) {
    if (s.charAt(i) == s.charAt(i).toUpperCase()) {
      var stringMayus = stringMayus + s.charAt(i);
    } else if (s.charAt(i) == s.charAt(i).toLowerCase()) {
      var stringMinus = stringMinus + s.charAt(i); 
    }
  }
  return stringMayus + stringMinus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  String.prototype.reverse = function() {
    var a = this.length;
    var reversedString = "";
    while ( a >= 0 ) {
      reversedString = reversedString + this.charAt(a);
      a--;
    }
    return reversedString;
  }
  var b = str.split([' ']);
  for ( var i = 0; i < b.length; i++ ) {
    b[i] = b[i].reverse();
  }
  return b.join(' ');
}
  

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var a = numero.toString();
  var reversedNumber = "";
  for ( var i = a.length - 1; i >= 0; i--) {
    reversedNumber = reversedNumber + a[i]
  }
  if (numero == reversedNumber) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  var a = '';
  for ( i = 0; i < cadena.length; i++) {
    if (cadena[i] == 'a' || cadena[i] == 'b' || cadena[i] == 'c') {
        a = a + '';
    } else {
    a = a + cadena[i];
    }
  } return a
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for ( i = 0; i < arr.length; i++) {
    for ( j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        var a = arr[i];
        arr[i] = arr[j];
        arr[j] = a;
      }
    }
  } return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var a = [];
  for ( i = 0; i < arreglo1.length; i++ ) {
    for ( j = 0; j < arreglo2.length; j++ ) {
      if (arreglo1[i] === arreglo2[j]) {
        a.push(arreglo1[i]);
      }
    }
  } return a
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

