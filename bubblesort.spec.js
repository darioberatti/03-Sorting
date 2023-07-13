describe("Bubble Sort", function () {
  it("Puede manejar un arreglo vacío", function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

it("Un Arreglo desordenado que termine ordenado", function () {
  expect(bubbleSort([5, 8, 3, 1, 9])).toEqual([1, 3, 5, 8, 9]);
});

it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
  expect(bubbleSort([2, 6, 7, 9])).toEqual([2, 6, 7, 9]);
});

it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado", function () {
  expect(bubbleSort([9, 7, 6, 4, 2])).toEqual([2, 4, 6, 7, 9]);
});

