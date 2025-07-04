# Quick Sort

Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach to sort items in an array.

## How Quick Sort Works

Suppose we have this array:

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order.

Quick Sort works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays: those less than the pivot and those greater than the pivot. The process is then recursively applied to the sub-arrays.

Let's see how it works step by step (using the last element as the pivot):

### First Partition

1. Choose **3** as the pivot.
2. Rearrange the array so that all elements less than **3** come before it, and all elements greater come after.
    - After partitioning: `[2, 3, 12, 8, 7]`
    - **3** is now in its correct position.

### Recursively Sort Left Sub-array `[2]`

- Only one element, so it's already sorted.

### Recursively Sort Right Sub-array `[12, 8, 7]`

1. Choose **7** as the pivot.
2. Partition: `[7, 8, 12]`
    - **7** is in its correct position.

#### Recursively Sort `[8, 12]`

1. Choose **12** as the pivot.
2. Partition: `[8, 12]`
    - Both elements are in place.

Now, the array is sorted:

```
[2, 3, 7, 8, 12]
```

---

**Visualization:**

| Step                | Array State         |
|---------------------|--------------------|
| Initial             | 7 2 12 8 3         |
| Partition on 3      | 2 3 12 8 7         |
| Partition on 7      | 2 3 7 8 12         |
| Partition on 12/8   | 2 3 7 8 12 (sorted)|

Quick Sort is much faster than Bubble Sort for large lists.

## Complexity Analysis

- **Space Complexity:** O(log n)

  - Due to recursive calls (stack space), but sorting is in-place.

- **Time Complexity:**
  - **Best Case:** O(n log n)
     - Occurs when the pivot divides the array into two nearly equal halves.
  - **Average Case:** O(n log n)
     - Typical performance with random pivots.
  - **Worst Case:** O(n²)
     - Happens when the smallest or largest element is always chosen as the pivot (e.g., already sorted array with poor pivot choice).

Quick Sort is efficient and widely used for large datasets.