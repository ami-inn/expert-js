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
// phases
// phase 1: [7, 2, 12, 8, 3]
// phase 2: [2, 7, 12, 8, 3]    // 7 and 2 swapped
// phase 3: [2, 7, 12, 8, 3]    // 7 <= 12, move forward
// phase 4: [2, 7, 8, 12, 3]    // 12 and 8 swapped
// phase 5: [2, 7, 8, 12, 3]    // 8 <= 12, move forward
// phase 6: [2, 7, 8, 3, 12]    // 12 and 3 swapped
// phase 7: [2, 7, 3, 8, 12]    // 8 and 3 swapped
// phase 8: [2, 3, 7, 8, 12]    // 7 and 3 swapped
// phase 9: [2, 3, 7, 8, 12]    // sorted
