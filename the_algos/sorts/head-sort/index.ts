// head sort

const headSort = (array: number[]): number[] => {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }
  return array;
};

const heapify = (array: number[], n: number, i: number) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest);
  }
};

const headSortArr = [7, 2, 12, 8, 3, 10, 9];

console.log("Unsorted array:", headSortArr);
const sortedArr = headSort(headSortArr);
console.log("Sorted array:", sortedArr);
// Output: Sorted array: [2, 3, 7, 8, 9, 10, 12]

// Explanation of phases:
// 1. Build max heap:
//    [12, 8, 10, 2, 3, 7, 9]
// 2. Swap max with last, heapify:
//    [10, 8, 9, 2, 3, 7, 12]
//    [9, 8, 7, 2, 3, 10, 12]
//    [8, 3, 7, 2, 9, 10, 12]
//    [7, 3, 2, 8, 9, 10, 12]
//    [3, 2, 7, 8, 9, 10, 12]
//    [2, 3, 7, 8, 9, 10, 12]
// 3. Sorted array:
//    [2, 3, 7, 8, 9, 10, 12]