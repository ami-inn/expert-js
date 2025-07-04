
const insertionSort = (array: number[]): number[] => {
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
}

// Example usage:
const insertionArr = [7, 2, 12, 8, 3];
const sortedArray = insertionSort(insertionArr);
console.log(sortedArray); // Output: [2, 3, 7, 8, 12]

// phases
// Initial: [7, 2, 12, 8, 3]
// After inserting 2: [2, 7, 12, 8, 3]
// After inserting 12: [2, 7, 12, 8, 3]
// After inserting 8: [2, 7, 8, 12, 3]
// After inserting 3: [2, 3, 7, 8, 12]
