"use strict";
const insertionSort = (array) => {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        const key = array[i];
        let j = i - 1;
        // Move elements of array[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return array;
};
// Example usage:
const insertionArr = [7, 2, 12, 8, 3];
const sortedArray = insertionSort(insertionArr);
console.log(sortedArray); // Output: [2, 3, 7, 8, 12]
// phases
// phase 1: [7, 2, 12, 8, 3] → [2, 7, 12, 8, 3] → [2, 3, 12, 8, 7]
// phase 2: [2, 3, 12, 8, 7] (no swaps needed)
// phase 3: [2, 3, 12, 8, 7] → [2, 3, 7, 8, 12]
// phase 4: [2, 3, 7, 8, 12] (no swaps needed)
// phase 5: [2, 3, 7, 8, 12] (no swaps needed, algorithm terminates)
// Sorted array will look like: [2, 3, 7, 8, 12]
// Indices:                      0  1  2  3   4
