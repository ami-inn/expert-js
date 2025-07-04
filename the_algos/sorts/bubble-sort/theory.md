# Bubble Sort

Bubble Sort is a simple way to sort the items in an array, usually from smallest to largest.

## How Bubble Sort Works

Let's say we have this array:

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order (smallest to largest).

Bubble Sort works by repeatedly stepping through the list, comparing two adjacent items at a time, and swapping them if they are in the wrong order. With each pass through the array, the largest unsorted element "bubbles up" to its correct position at the end.

Let's see how it works step by step:

### First Pass

1. Compare **7** and **2**. Since 7 > 2, swap them.
   ```
   [2, 7, 12, 8, 3]
   ```
2. Compare **7** and **12**. 7 < 12, so no swap.
   ```
   [2, 7, 12, 8, 3]
   ```
3. Compare **12** and **8**. 12 > 8, so swap.
   ```
   [2, 7, 8, 12, 3]
   ```
4. Compare **12** and **3**. 12 > 3, so swap.
   ```
   [2, 7, 8, 3, 12]
   ```

After the first pass, the largest number (**12**) is at the end.

### Second Pass

Now, we repeat the process, but we can ignore the last element (it's already sorted):

1. Compare **2** and **7**. 2 < 7, so no swap.
   ```
   [2, 7, 8, 3, 12]
   ```
2. Compare **7** and **8**. 7 < 8, so no swap.
   ```
   [2, 7, 8, 3, 12]
   ```
3. Compare **8** and **3**. 8 > 3, so swap.
   ```
   [2, 7, 3, 8, 12]
   ```

Now, the second largest number (**8**) is in its correct place.

### Third Pass

Repeat again, ignoring the last two elements:

1. Compare **2** and **7**. 2 < 7, so no swap.
   ```
   [2, 7, 3, 8, 12]
   ```
2. Compare **7** and **3**. 7 > 3, so swap.
   ```
   [2, 3, 7, 8, 12]
   ```

Now, the third largest number (**7**) is in place.

### Fourth Pass

Only compare the first two elements:

1. Compare **2** and **3**. 2 < 3, so no swap.
   ``` 
   [2, 3, 7, 8, 12]
   ```

Now the array is sorted!

---

**Visualization:**

| Pass | Array State                                                    |
| ---- | -------------------------------------------------------------- |
| 1    | 7 2 12 8 3 → 2 7 12 8 3 → 2 7 12 8 3 → 2 7 8 12 3 → 2 7 8 3 12 |
| 2    | 2 7 8 3 12 → 2 7 8 3 12 → 2 7 3 8 12                           |
| 3    | 2 7 3 8 12 → 2 3 7 8 12                                        |
| 4    | 2 3 7 8 12 (sorted)                                            |

Bubble Sort is easy to understand, but it is not very efficient for large lists.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Bubble Sort is an in-place algorithm; it only needs a constant amount of extra space.

- **Time Complexity:**
  - **Best Case:** O(n)
    - Occurs when the array is already sorted. With an optimized version that checks for swaps, only one pass is needed.
  - **Average Case:** O(n²)
    - Typical performance when elements are in random order.
  - **Worst Case:** O(n²)
    - Happens when the array is sorted in reverse order.

Bubble Sort is simple but inefficient for large datasets.
