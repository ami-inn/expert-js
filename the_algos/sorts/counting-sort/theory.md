
# Counting Sort

Counting Sort is a non-comparison-based sorting algorithm that works efficiently when the range of input values is not significantly greater than the number of elements to be sorted.

## How Counting Sort Works

Suppose we have the following array of non-negative integers:

```
[4, 2, 2, 8, 3, 3, 1]
```

We want to sort it in ascending order.

Counting Sort works by counting the occurrences of each unique value in the array, then using this information to place each value directly into its correct position in the output array.

Let's see how it works step by step:

### Step 1: Find the Range

First, find the maximum value in the array (here, 8). We'll create a count array of size `max + 1` (so, size 9).

### Step 2: Count Occurrences

Count how many times each value appears:

| Value | Count |
|-------|-------|
| 0     | 0     |
| 1     | 1     |
| 2     | 2     |
| 3     | 2     |
| 4     | 1     |
| 5     | 0     |
| 6     | 0     |
| 7     | 0     |
| 8     | 1     |

So, the count array is:

```
[0, 1, 2, 2, 1, 0, 0, 0, 1]
```

### Step 3: Compute Cumulative Counts

Update the count array so that each element at index `i` contains the number of elements less than or equal to `i`:

```
[0, 1, 3, 5, 6, 6, 6, 6, 7]
```

### Step 4: Place Elements in Output Array

Now we go through the **original array from right to left** and place each element in its correct position using the cumulative count array.

**Original array:** `[4, 2, 2, 8, 3, 3, 1]` (going right to left)
**Cumulative count:** `[0, 1, 3, 5, 6, 6, 6, 6, 7]`
**Output array:** `[_, _, _, _, _, _, _]` (initially empty, size 7)

**How it works:** For each element `x`, the cumulative count at `count[x]` tells us how many elements are ≤ x. This means `x` should go at position `count[x]` in the output array (using 1-based indexing).

Let's trace through step by step:

**Step 4.1:** Element = 1 (rightmost in original array)
- Look at `count[1] = 1` → This means 1 element is ≤ 1
- Place 1 at position 1 (index 0): `[1, _, _, _, _, _, _]`
- Decrease `count[1]` from 1 to 0: `[0, 0, 3, 5, 6, 6, 6, 6, 7]`

**Step 4.2:** Element = 3 (next element going left)
- Look at `count[3] = 5` → This means 5 elements are ≤ 3
- Place 3 at position 5 (index 4): `[1, _, _, _, 3, _, _]`
- Decrease `count[3]` from 5 to 4: `[0, 0, 3, 4, 6, 6, 6, 6, 7]`

**Step 4.3:** Element = 3 (next element)
- Look at `count[3] = 4` → Place 3 at position 4 (index 3): `[1, _, _, 3, 3, _, _]`
- Decrease `count[3]` from 4 to 3: `[0, 0, 3, 3, 6, 6, 6, 6, 7]`

**Step 4.4:** Element = 8
- Look at `count[8] = 7` → Place 8 at position 7 (index 6): `[1, _, _, 3, 3, _, 8]`
- Decrease `count[8]` from 7 to 6: `[0, 0, 3, 3, 6, 6, 6, 6, 6]`

**Step 4.5:** Element = 2
- Look at `count[2] = 3` → Place 2 at position 3 (index 2): `[1, _, 2, 3, 3, _, 8]`
- Decrease `count[2]` from 3 to 2: `[0, 0, 2, 3, 6, 6, 6, 6, 6]`

**Step 4.6:** Element = 2
- Look at `count[2] = 2` → Place 2 at position 2 (index 1): `[1, 2, 2, 3, 3, _, 8]`
- Decrease `count[2]` from 2 to 1: `[0, 0, 1, 3, 6, 6, 6, 6, 6]`

**Step 4.7:** Element = 4 (leftmost in original array)
- Look at `count[4] = 6` → Place 4 at position 6 (index 5): `[1, 2, 2, 3, 3, 4, 8]`
- Decrease `count[4]` from 6 to 5: `[0, 0, 1, 3, 5, 6, 6, 6, 6]`

**Why go right to left?**
We traverse the original array from right to left to maintain **stability**. This ensures that if two elements have the same value, the one that appeared later in the original array will be placed later in the sorted array, preserving their relative order.

**Why does this work?**
The cumulative count array tells us exactly where each element should go. For any value `x`, `count[x]` represents the total number of elements that should come before or at the position of `x` in the final sorted array. By decrementing the count after placing each element, we ensure that duplicate values get placed in consecutive positions.

After placing all elements, the sorted array is:

```
[1, 2, 2, 3, 3, 4, 8]
```

**Quick Summary:**
- **Count array:** Counts how many times each number appears
- **Cumulative count:** Shows how many numbers are ≤ each value
- **Placement:** Use cumulative count to directly place each element in its final position
- **Result:** Sorted array without any comparisons!

---

**Visualization:**

| Step         | Array State                |
|--------------|---------------------------|
| Original     | 4 2 2 8 3 3 1             |
| Count        | 0 1 2 2 1 0 0 0 1         |
| Cumulative   | 0 1 3 5 6 6 6 6 7         |
| Sorted       | 1 2 2 3 3 4 8             |

Counting Sort is very fast when the range of input values is small compared to the number of elements.

## Complexity Analysis

- **Space Complexity:** O(k)
    - Where `k` is the range of the input values (max value - min value + 1).
- **Time Complexity:**
    - **Best, Average, and Worst Case:** O(n + k)
        - `n` is the number of elements, `k` is the range of input.

Counting Sort is not a comparison sort and is efficient for sorting integers or objects with small integer keys.


## What Counting Sort Is Used for

Counting Sort is commonly used in scenarios where the input consists of integers within a limited range. Some typical use cases include:

- **Sorting exam scores:** When scores are integers within a known range (e.g., 0–100).
- **Sorting ages:** Useful when sorting people by age, as ages typically fall within a small range.
- **Preprocessing for radix sort:** Counting Sort is often used as a subroutine in radix sort for sorting digits or characters.
- **Sorting objects with integer keys:** When objects have integer keys within a small range, Counting Sort can efficiently sort them in linear time.

It is not suitable for sorting data with a large range of values or non-integer data types.