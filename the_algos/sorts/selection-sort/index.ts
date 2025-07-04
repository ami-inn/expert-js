const selectionSort = (array: number[]): number[] => {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
};

const selectionUnSortArr = [64, 25, 12, 22, 11];
console.log("Unsorted array:", selectionUnSortArr);
const selectionSortArr = selectionSort(selectionUnSortArr);
console.log("Sorted array:", selectionSortArr);
// Output: Sorted array: [11, 12, 22, 25, 64]

// Explanation of phases:
// 1. Initial array: [64, 25, 12, 22, 11]
// 2. Find minimum in [64, 25, 12, 22, 11]:
//    - Minimum is 11 at index 4
//    - Swap 64 and 11: [11, 25, 12, 22, 64]
// 3. Find minimum in [25, 12, 22, 64]:
//    - Minimum is 12 at index 2
//    - Swap 25 and 12: [11, 12, 25,
// 22, 64]
// 4. Find minimum in [25, 22, 64]:
//    - Minimum is 22 at index 3
//    - Swap 25 and 22: [11, 12, 22, 25, 64]
// 5. Find minimum in [25, 64]:
//    - Minimum is 25 at index 3
//    - No swap needed: [11, 12, 22, 25, 64]
// 6. Final sorted array: [11, 12, 22, 25, 64]
// 7. Total comparisons: 10 (4 + 3 + 2 + 1)
// 8. Total swaps: 3 (64 with 11, 25 with 12, 22 with 25)
// 9. Time complexity: O(n^2) in worst case
// 10. Space complexity: O(1) (in-place sorting)
