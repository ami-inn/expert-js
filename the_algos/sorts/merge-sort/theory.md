# Merge Sort

Merge Sort is a divide-and-conquer algorithm that efficiently sorts arrays by breaking them down into smaller pieces, sorting those, and then merging them back together.

## How Merge Sort Works

Suppose we have this array:

```
[7, 2, 12, 8, 3]
```

Merge Sort works in three main steps:

1. **Divide:** Split the array into two halves.
2. **Conquer:** Recursively sort each half.
3. **Combine:** Merge the sorted halves to produce a sorted array.

Let's see how it works step by step:

### Step 1: Divide

Split `[7, 2, 12, 8, 3]` into two halves:

- Left: `[7, 2]`
- Right: `[12, 8, 3]`

### Step 2: Recursively Sort Each Half

Sort `[7, 2]`:
- Split into `[7]` and `[2]`
- Both are single elements, so they're sorted
- Merge `[7]` and `[2]` → `[2, 7]`

Sort `[12, 8, 3]`:
- Split into `[12]` and `[8, 3]`
- `[12]` is sorted
- Sort `[8, 3]`:
    - Split into `[8]` and `[3]`
    - Merge `[8]` and `[3]` → `[3, 8]`
- Merge `[12]` and `[3, 8]`:
    - Compare 12 and 3 → 3 is smaller
    - Compare 12 and 8 → 8 is smaller
    - Only 12 remains
    - Result: `[3, 8, 12]`

### Step 3: Merge Sorted Halves

Merge `[2, 7]` and `[3, 8, 12]`:

- Compare 2 and 3 → 2 is smaller
- Compare 7 and 3 → 3 is smaller
- Compare 7 and 8 → 7 is smaller
- Only 8 and 12 remain
- Result: `[2, 3, 7, 8, 12]`

Now the array is sorted!

---

**Visualization:**

| Step         | Array State                |
| ------------ | ------------------------- |
| Divide       | [7, 2, 12, 8, 3]          |
| Split        | [7, 2]   [12, 8, 3]       |
| Sort left    | [2, 7]                    |
| Sort right   | [3, 8, 12]                |
| Merge        | [2, 3, 7, 8, 12]          |

Merge Sort always splits the array until each subarray has one element, then merges them in sorted order.

## Complexity Analysis

- **Space Complexity:** O(n)

    - Merge Sort requires additional space proportional to the size of the array for the merging process.

- **Time Complexity:**
    - **Best Case:** O(n log n)
    - **Average Case:** O(n log n)
    - **Worst Case:** O(n log n)

Merge Sort is much more efficient than Bubble Sort for large datasets, especially when stability and predictable performance are important.