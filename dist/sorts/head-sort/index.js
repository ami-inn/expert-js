"use strict";
// head sort
const headSort = (array) => {
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
const heapify = (array, n, i) => {
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
// phase 1 [7, 2, 12, 8, 3, 10, 9] → [2, 3, 7, 8, 9, 10, 12 ]
// phase 2 [2, 3, 7, 8, 9, 10, 12] (no swaps needed)
// phase 3 [2, 3, 7, 8, 9, 10, 12] (no swaps needed)
// phase 4 [2, 3, 7, 8, 9, 10, 12] (no swaps needed)
// phase 5 [2, 3, 7, 8, 9, 10, 12] (no swaps needed, algorithm terminates)
// Sorted array will look like: [2, 3, 7, 8, 9, 10, 12]
// Indices:                      0  1  2  3  4  5  6
