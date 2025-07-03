function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return [];

    // Step 1: Find the maximum value
    const max = Math.max(...arr);

    // Step 2: Count occurrences
    const count = new Array(max + 1).fill(0);
    for (const num of arr) {
        count[num]++;
    }

    // Step 3: Compute cumulative counts
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 4: Place elements in output array (right to left for stability)
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num] - 1] = num;
        count[num]--;
    }

    return output;
}
// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sorted = countingSort(arr);
console.log(sorted); // Output: [1, 2, 2, 3, 3, 4, 8]

// Counting Sort phases:
// phase 1: Find max value in arr → max = 8
// phase 2: Count occurrences → count = [0,1,2,0,1,0,0,0,1,0] (indices 0..8)
// phase 3: Compute cumulative counts → count = [0,1,3,3,4,4,4,4,5,5]
// phase 4: Place elements in output array (right to left for stability)
//   - Place 1: output[0] = 1, count[1]--
//   - Place 3: output[2] = 3, count[3]--
//   - Place 3: output[1] = 3, count[3]--
//   - Place 8: output[4] = 8, count[8]--
//   - Place 2: output[2] = 2, count[2]--
//   - Place 2: output[1] = 2, count[2]--
//   - Place 4: output[3] = 4, count[4]--
// phase 5: Output array is [1,2,2,3,3,4,8]
