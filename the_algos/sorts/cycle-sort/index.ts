
export const cycleSort = (array: number[]): number[] => {
    const n = array.length;
    for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
        let item = array[cycleStart];
        let pos = cycleStart;

        // Find where to put the item
        for (let i = cycleStart + 1; i < n; i++) {
            if (array[i] < item) {
                pos++;
            }
        }

        // If the item is already in the correct position, continue
        if (pos === cycleStart) continue;

        // Skip duplicates
        while (item === array[pos]) {
            pos++;
        }

        // Put the item to its right position
        if (pos !== cycleStart) {
            [array[pos], item] = [item, array[pos]];
        }

        // Rotate the rest of the cycle
        while (pos !== cycleStart) {
            pos = cycleStart;
            for (let i = cycleStart + 1; i < n; i++) {
                if (array[i] < item) {
                    pos++;
                }
            }
            while (item === array[pos]) {
                pos++;
            }
            [array[pos], item] = [item, array[pos]];
        }
    }
    return array;
};
console.log(cycleSort([7, 2, 12, 8, 3])); // Output: [2, 3, 7, 8, 12]

// phases
/*
phase 1: [7,2,12,8,3] → [2,7,12,8,3] → [2,3,12,8,7]
phase 2: [2,3,12,8,7] (no swaps needed)
phase 3: [2,3,12,8,7] → [2,3,7,8,12]
phase 4: [2,3,7,8,12] (no swaps needed)
phase 5: [2,3,7,8,12] (no swaps needed, algorithm terminates)
*/
