## Heap Sort

Heap Sort is an efficient comparison-based sorting algorithm that uses a binary heap data structure. There are two main types of heaps used in sorting: **Max Heap** and **Min Heap**.

- **Max Heap:** The parent node is always greater than or equal to its children. Used for sorting in ascending order.
- **Min Heap:** The parent node is always less than or equal to its children. Used for sorting in descending order.

## How Heap Sort Works

Suppose we have this array:

```
[7, 2, 12, 8, 3]
```

Heap Sort works in two main phases:

1. **Build a Heap:** Arrange the array into a binary heap (max heap for ascending sort, min heap for descending sort). Every element in the array is treated as a node in the heap.
2. **Extract Elements:** Repeatedly remove the root element (largest for max heap, smallest for min heap), place it at the end of the array, and restore the heap property for the remaining elements.

Let's see the process step by step for both heap types:

---

### Heap Sort Using Max Heap (Ascending Order)

#### Step 1: Build a Max Heap

Transform the array into a max heap:

```
    12
   /  \
  8    7
 / \
2   3
```

The array representation after heapifying:

```
[12, 8, 7, 2, 3]
```

#### Step 2: Extract Elements

Now, repeatedly swap the root (largest) with the last element, reduce the heap size, and heapify again.

1. Swap 12 and 3:

   ```
   [3, 8, 7, 2, 12]
   ```

   Heapify the first 4 elements:

   ```
   [8, 3, 7, 2, 12]
   ```

2. Swap 8 and 2:

   ```
   [2, 3, 7, 8, 12]
   ```

   Heapify the first 3 elements:

   ```
   [7, 3, 2, 8, 12]
   ```

3. Swap 7 and 2:

   ```
   [2, 3, 7, 8, 12]
   ```

   Heapify the first 2 elements:

   ```
   [3, 2, 7, 8, 12]
   ```

4. Swap 3 and 2:
   ```
   [2, 3, 7, 8, 12]
   ```

Now the array is sorted in ascending order!

---

### Heap Sort Using Min Heap (Descending Order)

To sort in descending order, use a min heap.

#### Step 1: Build a Min Heap

Transform the array into a min heap:

```
    2
   / \
  3   7
 / \
8  12
```

The array representation after heapifying:

```
[2, 3, 7, 8, 12]
```

#### Step 2: Extract Elements

Now, repeatedly swap the root (smallest) with the last element, reduce the heap size, and heapify again.

1. Swap 2 and 12:

   ```
   [12, 3, 7, 8, 2]
   ```

   Heapify the first 4 elements:

   ```
   [3, 8, 7, 12, 2]
   ```

2. Swap 3 and 12:

   ```
   [12, 8, 7, 3, 2]
   ```

   Heapify the first 3 elements:

   ```
   [7, 8, 12, 3, 2]
   ```

3. Swap 7 and 12:

   ```
   [12, 8, 7, 3, 2]
   ```

   Heapify the first 2 elements:

   ```
   [8, 12, 7, 3, 2]
   ```

4. Swap 8 and 12:
   ```
   [12, 8, 7, 3, 2]
   ```

Now the array is sorted in descending order!

---

**Visualization (Max Heap for Ascending Order):**

| Step       | Array State             |
| ---------- | ----------------------- |
| Build Heap | 12 8 7 2 3              |
| Extract 12 | 3 8 7 2 12 → 8 3 7 2 12 |
| Extract 8  | 2 3 7 8 12 → 7 3 2 8 12 |
| Extract 7  | 2 3 7 8 12 → 3 2 7 8 12 |
| Extract 3  | 2 3 7 8 12              |
| Sorted     | 2 3 7 8 12              |

**Visualization (Min Heap for Descending Order):**

| Step       | Array State             |
| ---------- | ----------------------- |
| Build Heap | 2 3 7 8 12              |
| Extract 2  | 12 3 7 8 2 → 3 8 7 12 2 |
| Extract 3  | 12 8 7 3 2 → 7 8 12 3 2 |
| Extract 7  | 12 8 7 3 2 → 8 12 7 3 2 |
| Extract 8  | 12 8 7 3 2              |
| Sorted     | 12 8 7 3 2              |

Heap Sort efficiently sorts the array by leveraging the heap structure.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Heap Sort is in-place; it does not require extra space beyond the input array.

- **Time Complexity:**
  n= Number of elements in the array
  log n = log base 2 of n

  - **Best Case:** O(n log n)
  - **Average Case:** O(n log n)
  - **Worst Case:** O(n log n)
    - Building the heap takes O(n), and each of the n extraction steps takes O(log n).

Heap Sort is more efficient than Bubble Sort for large datasets and guarantees O(n log n) performance.
