# Insertion Sort

Insertion Sort is another simple sorting algorithm that builds the final sorted array one item at a time.

## How Insertion Sort Works

Suppose we have this array:

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order (smallest to largest).

Insertion Sort works by dividing the array into a sorted and an unsorted part. It repeatedly picks the first unsorted element and inserts it into the correct position in the sorted part.

Let's see how it works step by step:

### First Pass

The first element (**7**) is considered sorted.

1. Take **2** (the next element). Compare with **7**. Since 2 < 7, insert 2 before 7.
    ```
    [2, 7, 12, 8, 3]
    ```

### Second Pass

Now, the first two elements (**2**, **7**) are sorted.

1. Take **12**. Compare with **7**. 12 > 7, so it stays in place.
    ```
    [2, 7, 12, 8, 3]
    ```

### Third Pass

First three elements (**2**, **7**, **12**) are sorted.

1. Take **8**. Compare with **12**. 8 < 12, so move 12 one position right.
2. Compare 8 with **7**. 8 > 7, so insert 8 after 7.
    ```
    [2, 7, 8, 12, 3]
    ```

### Fourth Pass

First four elements (**2**, **7**, **8**, **12**) are sorted.

1. Take **3**. Compare with **12**. 3 < 12, move 12 right.
2. Compare 3 with **8**. 3 < 8, move 8 right.
3. Compare 3 with **7**. 3 < 7, move 7 right.
4. Compare 3 with **2**. 3 > 2, insert 3 after 2.
    ```
    [2, 3, 7, 8, 12]
    ```

Now the array is sorted!

---

**Visualization:**

| Pass | Array State                                                    |
| ---- | -------------------------------------------------------------- |
| 1    | 7 2 12 8 3 → 2 7 12 8 3                                       |
| 2    | 2 7 12 8 3 (no change)                                        |
| 3    | 2 7 12 8 3 → 2 7 8 12 3                                       |
| 4    | 2 7 8 12 3 → 2 3 7 8 12                                       |

Insertion Sort is efficient for small or nearly sorted arrays.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Insertion Sort is in-place and uses only a constant amount of extra space.

- **Time Complexity:**
  - **Best Case:** O(n)
     - Occurs when the array is already sorted. Only one comparison per element.
  - **Average Case:** O(n²)
     - Typical performance for random order.
  - **Worst Case:** O(n²)
     - Happens when the array is sorted in reverse order.

Insertion Sort is simple and efficient for small datasets or nearly sorted data, but not suitable for large unsorted arrays.