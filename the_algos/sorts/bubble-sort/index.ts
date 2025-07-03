const bubbleSort = (arr: number[]): number[] => {
  const n = arr.length;
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

// phase 1: Testing the bubbleSort function
// Pass 1: [5,3,8,4,2] → [3,5,8,4,2] → [3,5,8,4,2] → [3,5,4,8,2] → [3,5,4,2,8]
// Pass 2: [3,5,4,2,8] → [3,4,5,2,8] → [3,4,2,5,8] → [3,4,2,5,8]
// Pass 3: [3,4,2,5,8] → [3,2,4,5,8] → [3,2,4,5,8] → [3,2,4,5,8]
// Pass 4: [3,2,4,5,8] → [2,3,4,5,8] → [2,3,4,5,8] → [2,3,4,5,8]
// psss 5: no swaps needed, algorithm teminates

console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
