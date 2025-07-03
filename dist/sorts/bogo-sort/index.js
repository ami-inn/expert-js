"use strict";
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function bogoSort(arr) {
    while (!isSorted(arr)) {
        arr = shuffle(arr);
    }
    return arr;
}
console.log(bogoSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
// Note: Bogo sort is highly inefficient and not suitable for large arrays. It is primarily used for educational purposes to illustrate the concept of sorting algorithms.
// This implementation is a simple demonstration of the algorithm.
// cant predict the output as it depends on random shuffling
// The output will be a sorted array, but the order of elements may vary due to the random nature of the algorithm.
// For example, the output could be [2, 3, 4, 5, 8] or [2, 3, 4, 5, 8] or any other permutation of these numbers as long as they are sorted.
// The algorithm will keep shuffling the array until it finds a sorted order, which is highly inefficient and can take a long time for larger arrays.
