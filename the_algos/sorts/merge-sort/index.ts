const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
};

const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //   // Concatenate any remaining elements from both halves
  // This is necessary because one of the halves may still have elements left
  // after the main loop has finished.
  return result.concat(left.slice(i)).concat(right.slice(j));
};


const mergeunSortArr = [7, 2, 12, 8, 3, 10, 9];
console.log("Unsorted array:", mergeunSortArr);
const mergeSortArr  = mergeSort(mergeunSortArr);

console.log("Sorted array:", mergeSortArr);


// phases:

// phase 1: The array is recursively split into halves until each subarray has one element.
//   [7, 2, 12, 8, 3, 10, 9]
//   → [7, 2, 12] and [8, 3, 10, 9]
//   → [7], [2, 12], [8, 3], [10, 9]
//   → [7], [2], [12], [8], [3], [10], [9]

// phase 2: The subarrays are merged back together in sorted order.
//   [2] and [12] → [2, 12]
//   [7] and [2, 12] → [2, 7, 12]
//   [8] and [3] → [3, 8]
//   [10] and [9] → [9, 10]
//   [3, 8] and [9, 10] → [3, 8, 9, 10]
//   [2, 7, 12] and [3, 8, 9, 10] → [2, 3, 7, 8, 9, 10, 12]

// phase 3: The final sorted array is produced.
//   [2, 3, 7, 8, 9, 10, 12]
