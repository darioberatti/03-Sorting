describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes, incluso si el wholeArray es impar", function () {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 3, 6], [2, 4, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("MergeSort", function () {
  it("recibe un arreglo desordenado y retorna en arreglo ordenado (spliteando y mergeando recursivamente)", function () {
    expect(mergeSort([45, 24, 90, 84, 32, 12])).toEqual([
      12, 24, 32, 45, 84, 90,
    ]);
  });
});
