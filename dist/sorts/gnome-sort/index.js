"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gnomeSort = void 0;
const gnomeSort = (array) => {
    let index = 0;
    while (index < array.length) {
        if (index === 0 || array[index] >= array[index - 1]) {
            index++;
        }
        else {
            [array[index], array[index - 1]] = [array[index - 1], array[index]];
            index--;
        }
    }
    return array;
};
exports.gnomeSort = gnomeSort;
// Example usage:
const arr = [7, 2, 12, 8, 3];
const sorted = (0, exports.gnomeSort)(arr);
console.log(sorted); // Output: [2, 3, 7, 8, 12]
// phase 1 : [7, 2, 12, 8, 3] → [2, 7, 12, 8, 3] → [2, 3, 12, 8, 7]
// phase 2 : [2, 3, 12, 8, 7] (no swaps needed)
// phase 3 : [2, 3, 12, 8, 7] → [2, 3, 7, 8, 12]
// phase 4 : [2, 3, 7, 8, 12] (no swaps needed)
// phase 5 : [2, 3, 7, 8, 12] (no swaps needed, algorithm terminates)
// gnomeSort([7, 2, 12, 8, 3]); // Output: [2, 3, 7, 8, 12]
