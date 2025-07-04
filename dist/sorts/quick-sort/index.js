"use strict";
const quickSort = (arr) => {
    if (arr.length <= 1)
        return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};
// Example usage:
const unsortedArray = [7, 2, 12, 8, 3, 10, 9];
console.log("Unsorted array:", unsortedArray);
const quicksortedArray = quickSort(unsortedArray);
console.log("Sorted array:", quicksortedArray);
// Quick Sort Phases Example:
// Initial array: [7, 2, 12, 8, 3, 10, 9]
// 1. Choose pivot (last element): 9
// 2. Partition:
//    left: [7, 2, 8, 3]
//    right: [12, 10]
// 3. Recursively sort left ([7, 2, 8, 3]):
//    - Pivot: 3
//    - left: [2]
//    - right: [7, 8]
//    - Recursively sort right ([7, 8]):
//      - Pivot: 8
//      - left: [7]
//      - right: []
//      - Result: [7, 8]
//    - Result: [2, 3, 7, 8]
// 4. Recursively sort right ([12, 10]):
//    - Pivot: 10
//    - left: []
//    - right: [12]
//    - Result: [10, 12]
// 5. Combine: [2, 3, 7, 8], 9, [10, 12] => [2, 3, 7, 8, 9, 10, 12]
