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

// phase 1: [4,2,2,8,3,3,1] → [2,4,2,8,3,3,1] → [2,2,4,8,3,3,1] → [2,2,4,8,3,3,1] → [2,2,4,3,8,3,1] → [2,2,4,3,3,8,1] → [2,2,4,3,3,1,8]
// phase 2: [2,2,4,3,3,1,8] → [2,2,4,3,3,1,8] → [2,2,3,4,3,1,8] → [2,2,3,3,4,1,8] → [2,2,3,3,1,4,8]
// phase 3: [2,2,3,3,1,4,8] → [2,2,3,3,1,4,8] → [2,2,3,1,3,4,8] → [2,2,1,3,3,4,8]
// phase 4: [2,2,1,3,3,4,8] → [2,1,2,3,3,4,8] → [1,2,2,3,3,4,8]
// phase 5: no swaps needed, algorithm terminates
