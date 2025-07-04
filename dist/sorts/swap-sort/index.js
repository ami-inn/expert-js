"use strict";
const swapSort = (array) => {
    const n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return array;
};
// Example usage
const swapSortArr = [7, 2, 12, 8, 3, 10, 9];
console.log("Unsorted array:", swapSortArr);
const swappedArr = swapSort(swapSortArr);
console.log("Sorted array:", swappedArr);
// Output: Sorted array: [2, 3, 7, 8, 9, 10, 12]
// Explanation of phases:
// 1. Initial: [7, 2, 12, 8, 3, 10, 9]
// 2. First pass: [2, 7, 8, 3,  10, 9, 12]
// 3. Second pass: [2, 3, 7, 8, 9, 10, 12]
// 4. Sorted: [2, 3, 7, 8, 9, 10, 12]
