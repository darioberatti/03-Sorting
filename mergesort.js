function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];

  if (wholeArray.length % 2 === 0) {
    for (let index = 0; index < wholeArray.length; index++) {
      if (index < wholeArray.length / 2) {
        firstHalf.push(wholeArray[index]);
      } else {
        secondHalf.push(wholeArray[index]);
      }
    }
  } else {
    for (let index = 0; index < wholeArray.length; index++) {
      if (index < Math.floor(wholeArray.length / 2)) {
        firstHalf.push(wholeArray[index]);
      } else {
        secondHalf.push(wholeArray[index]);
      }
    }
  }

  return [firstHalf, secondHalf];
}

// CREAR FUNCION MERGE

function merge(arreglo1, arreglo2) {
  let superArregloOConcatenado = arreglo1.concat(arreglo2);

  let mergeFinal = bubbleSort(superArregloOConcatenado);

  return mergeFinal;
}

//mergeSort genera una recursión que repite split y merge para desarmar el Arreglo y luego armarlo ordenadamente.

function mergeSort(array) {
  let arregloSpliteado = split(array);
  // primeraFuncion = [[first], [second]]

  let arreglo1 = bubbleSort(arregloSpliteado[0]);
  let arreglo2 = bubbleSort(arregloSpliteado[1]);

  let arregloOrdenado = merge(arreglo1, arreglo2);

  return arregloOrdenado;
}
