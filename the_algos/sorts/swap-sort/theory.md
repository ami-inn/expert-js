# Swap Sort

Swap Sort is a simple sorting algorithm that sorts an array by repeatedly swapping elements into their correct positions. Unlike Bubble Sort, which compares adjacent elements, Swap Sort places each element directly where it belongs by swapping.

## How Swap Sort Works

Suppose we have this array:

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order (smallest to largest).

Swap Sort works by iterating through the array and, for each position, finding the correct element that should be there and swapping it into place.

Let's see how it works step by step:

### First Pass

1. Start at index 0 (**7**). Find the smallest element in the array (**2** at index 1). Swap **7** and **2**.
    ```
    [2, 7, 12, 8, 3]
    ```

### Second Pass

2. Move to index 1 (**7**). Find the smallest element in the remaining array (**3** at index 4). Swap **7** and **3**.
    ```
    [2, 3, 12, 8, 7]
    ```

### Third Pass

3. Move to index 2 (**12**). Find the smallest element in the remaining array (**7** at index 4). Swap **12** and **7**.
    ```
    [2, 3, 7, 8, 12]
    ```

### Fourth Pass

4. Move to index 3 (**8**). The smallest element in the remaining array is **8** itself, so no swap.
    ```
    [2, 3, 7, 8, 12]
    ```

### Fifth Pass

5. At index 4, only one element remains, so the array is sorted.

---

**Visualization:**

| Pass | Array State                  |
| ---- | ---------------------------- |
| 1    | 7 2 12 8 3 → 2 7 12 8 3      |
| 2    | 2 7 12 8 3 → 2 3 12 8 7      |
| 3    | 2 3 12 8 7 → 2 3 7 8 12      |
| 4    | 2 3 7 8 12                   |
| 5    | 2 3 7 8 12 (sorted)          |

Swap Sort is straightforward and ensures that each element is placed in its correct position with a swap.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Swap Sort is an in-place algorithm; it only needs a constant amount of extra space.

- **Time Complexity:**
  - **Best Case:** O(n²)
     - Even if the array is already sorted, Swap Sort still checks all elements.
  - **Average Case:** O(n²)
     - Typical performance for random order.
  - **Worst Case:** O(n²)
     - Occurs when the array is sorted in reverse order.

Swap Sort is easy to implement but not efficient for large datasets.