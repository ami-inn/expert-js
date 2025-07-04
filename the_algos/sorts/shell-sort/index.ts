const shellSort = (array: number[]): number[] => {
  const n = array.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = array[i];
      let j = i;

      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return array;
};

// Example usage
const shellSortArr = [7, 2, 12, 8, 3, 10, 9];
console.log("Unsorted array:", shellSortArr);
const sortedArra = shellSort(shellSortArr);
console.log("Sorted array:", sortedArra);

// phases of shell sort:
// Initial: [7, 2, 12, 8, 3, 10, 9]

// Gap = 3:
// Compare 7 and 8 (no swap): [7, 2, 12, 8, 3, 10, 9]
// Compare 2 and 3 (no swap): [7, 2, 12, 8, 3, 10, 9]
// Compare 12 and 10 (swap): [7, 2, 10, 8, 3, 12, 9]
// Compare 8 and 9 (swap): [7, 2, 10, 8, 3, 12, 9]
// After gap 3 pass: [7, 2, 10, 8, 3, 12, 9]

// Gap = 1:
// Compare 7 and 2 (swap): [2, 7, 10, 8, 3, 12, 9]
// Compare 7 and 10 (no swap): [2, 7, 10, 8, 3, 12, 9]
// Compare 10 and 8 (swap): [2, 7, 8, 10, 3, 12, 9]
// Compare 10 and 3 (swap): [2, 7, 8, 3, 10, 12, 9]
// Compare 10 and 12 (no swap): [2, 7, 8, 3, 10, 12, 9]
// Compare 12 and 9 (swap): [2, 7, 8, 3, 10, 9, 12]
// Compare 10 and 9 (swap): [2, 7, 8, 3, 9, 10, 12]
// Compare 8 and 3 (swap): [2, 7, 3, 8, 9, 10, 12]
// Compare 7 and 3 (swap): [2, 3, 7, 8, 9, 10, 12]

// Sorted: [2, 3, 7, 8, 9, 10, 12]
