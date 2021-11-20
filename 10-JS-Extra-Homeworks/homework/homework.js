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
    return Object.entries(objeto);

  }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var cadena1 = [];
  var cadena2 = {};
  cadena1 = string.split('');
  var alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
  for(var i=0; i < alfabeto.length ; i++) {
    for(var j=0; j < cadena1.length; j++) {
      if(cadena1[j] == alfabeto[i] ) {
        if( cadena2.hasOwnProperty(alfabeto[i])){}
        else { cadena2[cadena1[j]] = 0}

        cadena2[cadena1[j]] += 1;

      }
    }
  }
  //console.log(cadena1);
  //console.log(cadena2);
  return cadena2;
 
  console.log(alfabeto);
  console.log(cadena2);
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var str1 = s;
  var strM = [];
  var strmin = [];
  var strFIN = [];
  //console.log(str1);
  function esMayuscula(letra)
  {
    return letra === letra.toUpperCase();
  }
  function esMinuscula(letra)
  {
    return letra === letra.toLowerCase();
  }   
  for(var i=0; i < str1.length; i++) {
    if( esMayuscula(str1.charAt(i)) ) {
      strM.push(str1.charAt(i));
    }
    else if( esMinuscula(str1.charAt(i))) {
      strmin.push(str1.charAt(i));
    }
  }
  strFIN = strM.join('') + strmin.join('');
  return strFIN;
  //a = esMayuscula(str1.charAt(3));
  console.log(strM)
  console.log(strmin);
  console.log(strFIN);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var recibido = str.split('');
  var contenedor = [];
  //console.log(recibido);
  //console.log(recibido.length);
  var tempArr = [];
  for(var i=0; i <= recibido.length; i++) {
    
    if(recibido[i] !== ' ' && i != (recibido.length)) {
      tempArr.unshift(recibido[i]);
    }
    else {

      contenedor.push(tempArr.join(''));
      tempArr = [];
    }

  }
  return contenedor.join(' ');
  console.log(tempArr);
  console.log(contenedor.join(' '));
  console.log(contenedor.length);

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numrec = numero.toString();
  var tempnum = [];
  var numfin;
  //console.log(numrec);
  //console.log(numrec.charAt(1));
  function num (numero) {
    for(var i=0; i < numero.length; i++) {
      tempnum.unshift(numero[i]);
    }
    return tempnum.join('');
  }
  numfin = num(numrec);
  //console.log(numfin);
  if (numrec === numfin) {
    return "Es capicua";
  }
  else {
    return "No es capicua";
  }
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var tempstr = cadena.split('');
  var temp = [];
  var fin;
  //console.log(tempstr);
  for(var i=0; i < tempstr.length; i++) {
    if(tempstr[i] !== "a" && tempstr[i] !== "b" && tempstr[i] !== "c") {
      temp.push(tempstr[i]);
    }
  }
  fin = temp.join('');
  //console.log(fin);
  return fin;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var matriz = arr;
  var matriz2 = [];
  var matriz3 = [];
  //console.log(matriz[9]);
  //matriz2 = matriz.sortArray();
  //console.log(matriz2);
  for(var i=0; i < matriz.length; i++) {
    matriz2.push(matriz[i].length);
  }
  matriz2.sort(function(a, b){return a - b});

  for (var j=0; j < matriz.length; j++) {
      if(matriz[j].length == matriz2[j]){
       matriz3.push(matriz[j]);
      }
      else  {
        //console.log("entro else");
        for(var k=0; k < matriz.length; k++){
          if(matriz[k].length == matriz2[j] && matriz[k] !== matriz3[k]){
            matriz3.push(matriz[k]);
          }
        }
      }
    
  }
  //console.log(matriz2);
  //console.log(matriz3);
  return matriz3;
  //var numeros = [3,7,2,5,4,4,2,7];
 // var res = numeros.sort(function(a, b){return a - b});
  //console.log(res);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arr1 = arreglo1;
  var arr2 = arreglo2;
  var arrFin = [];
  //console.log(arr1);
  //console.log(arr2);
  function arrMayor (arr1,arr2) {
    return arr1 > arr2 ? arr1.length : arr2.length ;
  }
  //console.log(arrMayor(arr1,arr2));
  for(var i=0; i < arr1.length; i++) {
    for(var j=0; j < arr2.length; j++){
      if(arr2[j] === arr1[i] ){
        arrFin.push(arr1[i]);
      }
    }
  }
  return arrFin;
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

