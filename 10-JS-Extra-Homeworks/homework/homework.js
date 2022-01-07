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
  var m =[];
  for(x in objeto){
      m.push([x,objeto[x]]);
  }
  return m;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var dist = {}
  dist[string[0]] = 0;

  for(var letra =0;letra<string.length;letra++){
      var encontrado = false;
      for(o in dist){
          if(o===string[letra]){
              dist[o]++;
              encontrado = true;
              break;
          }
      }        
      if(encontrado===false){
          dist[string[letra]]=1;
      }
      
  }
  return(dist);

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
may = [];
min = [];
for(var i=0;i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
       may.push(s[i]);
    }else{
        min.push(s[i]);
    }

}
return(may.join('')+min.join(''));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arr = str.split(' ');
  var newArr = [];
  for(var i=0;i<arr.length;i++){
      var inverted = '';
      for(var l = arr[i].length-1;l>=0;l--){
          inverted += arr[i][l];
      }
      newArr.push(inverted);
  }
  return(newArr.join(' '));
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
num = numero.toString();
num_inv = [];
for(var i=0;i<num.length;i++){
    num_inv.unshift(num[i]);
}
if(num_inv.join('')===num){
    return('Es capicua');
}else{
    return('No es capicua');
}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newCadena = '';
  for(var i=0;i<cadena.length;i++){
      if(cadena[i]!=='a' && cadena[i]!=='b' && cadena[i]!=='c'){
          newCadena += cadena[i];
      }
  }
  return newCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var new_arr = [];
  var new_arr_ord = [];
  max = 0;
  for(var i=0;i<arr.length;i++){
        new_arr.push([arr[i],arr[i].length]);
        if(max<new_arr[i][1]){
            max = new_arr[i][1];
        }
    }
    for(var i=0;i<=max;i++){
        for(var x=0;x<new_arr.length;x++){
            if(new_arr[x][1]===i){
                new_arr_ord.push(new_arr[x][0]);
            }
        }
    }

  return(new_arr_ord);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var inter =[];
for(var i=0;i<arreglo1.length;i++){
    for(var x=0;x<arreglo2.length;x++){
        if(arreglo1[i]===arreglo2[x]){
            inter.push(arreglo1[i]);
        }
    }
}
return(inter);

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

