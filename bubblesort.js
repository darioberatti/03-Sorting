function bubbleSort(array) {
  if (array.length === 0) {
    return array;
  }
  let desordenado = true;

  while (desordenado) {
    desordenado = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        let nuevoArray = swap([array[index], array[index + 1]]);
        [array[index], array[index + 1]] = nuevoArray;

        desordenado = true;
      }
    }
  }
  return array;
}

function swap(arreglo) {
  let resultado = [];

  if (arreglo[0] < arreglo[1]) {
    return (resultado = arreglo);
  } else {
    return (resultado = [arreglo[1], arreglo[0]]);
  }
}
