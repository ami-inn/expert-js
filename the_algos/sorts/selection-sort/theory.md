# Selection Sort

Selection Sort is another simple sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part and moving it to the beginning.

## How Selection Sort Works

Suppose we have this array:

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order.

Selection Sort works by dividing the array into two parts: the sorted part at the front and the unsorted part at the back. On each pass, it selects the smallest element from the unsorted part and swaps it with the first unsorted element.

Let's see how it works step by step:

### First Pass

1. Find the smallest element in `[7, 2, 12, 8, 3]`. It's **2**.
2. Swap **2** with the first element (**7**).
    ```
    [2, 7, 12, 8, 3]
    ```

### Second Pass

1. Find the smallest element in the remaining unsorted part `[7, 12, 8, 3]`. It's **3**.
2. Swap **3** with the first unsorted element (**7**).
    ```
    [2, 3, 12, 8, 7]
    ```

### Third Pass

1. Find the smallest element in `[12, 8, 7]`. It's **7**.
2. Swap **7** with **12**.
    ```
    [2, 3, 7, 8, 12]
    ```

### Fourth Pass

1. Only two elements left: `[8, 12]`. **8** is already in place, so no swap needed.
    ```
    [2, 3, 7, 8, 12]
    ```

Now the array is sorted!

---

**Visualization:**

| Pass | Array State                                                    |
| ---- | -------------------------------------------------------------- |
| 1    | 7 2 12 8 3 → 2 7 12 8 3                                       |
| 2    | 2 7 12 8 3 → 2 3 12 8 7                                       |
| 3    | 2 3 12 8 7 → 2 3 7 8 12                                       |
| 4    | 2 3 7 8 12 (sorted)                                           |

Selection Sort always scans the unsorted part to find the minimum, so the number of comparisons does not depend on the initial order.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Selection Sort is also in-place and uses only a constant amount of extra space.

- **Time Complexity:**
  - **Best Case:** O(n²)
  - **Average Case:** O(n²)
  - **Worst Case:** O(n²)

Selection Sort is simple and performs well on small lists, but it is inefficient for large datasets.