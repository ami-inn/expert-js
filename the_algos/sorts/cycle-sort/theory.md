# Cycle Sort

Cycle Sort is an in-place, unstable comparison sorting algorithm that is theoretically optimal in terms of the total number of writes to the original array—unlike any other in-place sorting algorithm. It is based on the idea that the permutation to be sorted can be factored into cycles, which can individually be rotated to give a sorted result. This makes Cycle Sort especially useful when writing to memory is costly.

## How Cycle Sort Works

Let's say we have this array:

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order (smallest to largest).

Cycle Sort works by determining the correct position for each element and placing it there, forming cycles of swaps. This minimizes the number of writes to the array.

Let's see how it works step by step:

### First Cycle

1. Start with the first element (**7**). 
   - Count how many elements are smaller than 7: 
     - 2 < 7 ✓ (count = 1)
     - 12 > 7 ✗
     - 8 > 7 ✗  
     - 3 < 7 ✓ (count = 2)
   - Total smaller elements = 2
   - Therefore, 7 should be at index 2 (since 2 elements will come before it)

2. Swap 7 with the element at index 2 (**12**):
    ```
    [12, 2, 7, 8, 3]
    ```
3. Now, 12 is at the starting position. Count how many elements are smaller than 12 (2, 3, 7, 8), so 12 should be at index 4.
4. Swap 12 with the element at index 4 (**3**):
    ```
    [3, 2, 7, 8, 12]
    ```
5. Now, 3 is at the starting position. Count how many elements are smaller than 3 (2), so 3 should be at index 1.
6. Swap 3 with the element at index 1 (**2**):
    ```
    [2, 3, 7, 8, 12]
    ```
7. Now, 2 is at the starting position. It should be at index 0, so the cycle is complete.

### Next Cycles

- Move to the next index and repeat the process for elements not already in the correct position.
- In this example, after the first cycle, the array is already sorted, so no further swaps are needed.

---

**Visualization:**

| Cycle | Array State                                                    |
| ----- | -------------------------------------------------------------- |
| 1     | 7 2 12 8 3 → 12 2 7 8 3 → 3 2 7 8 12 → 2 3 7 8 12              |

Cycle Sort minimizes the number of writes, making it useful for scenarios where memory writes are expensive.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Cycle Sort is an in-place algorithm; it only needs a constant amount of extra space.

- **Time Complexity:**
  - **Best Case:** O(n²)
  - **Average Case:** O(n²)
  - **Worst Case:** O(n²)

Cycle Sort is not stable and is rarely used in practice, but it is optimal for minimizing the number of writes.