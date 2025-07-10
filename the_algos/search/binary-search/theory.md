# Binary Search

Binary Search is an efficient algorithm for finding a target value within a sorted array.

## How Binary Search Works

Let's say we have this sorted array and want to find the number 15:

```
[2, 5, 8, 12, 15, 18, 20]
```

Binary Search works by repeatedly dividing the search interval in half. Instead of checking every element like Linear Search, it eliminates half of the remaining elements with each step.

Let's see how it works step by step:

### First Step

1. Find the middle element of the array (index 3):
   ```
   [2, 5, 8, 12, 15, 18, 20]
            ↑
           12
   ```
2. Compare **12** with target **15**
   - Since 12 < 15, eliminate all elements to the left of 12
   ```
   [15, 18, 20]
   ```

### Second Step

1. Find the middle element of the remaining array (index 0):
   ```
   [15, 18, 20]
     ↑
    15
   ```
2. Compare **15** with target **15**
   - They match! We've found our target.

If we hadn't found the target, we would continue dividing the remaining portion of the array until we either find the target or determine it's not in the array.

---

**Visualization:**

| Step | Array State | Middle | Target | Action |
|------|-------------|---------|---------|--------|
| 1 | [2, 5, 8, 12, 15, 18, 20] | 12 | 15 | 12 < 15, go right |
| 2 | [15, 18, 20] | 15 | 15 | Found! |

## Important Conditions

1. **Array Must Be Sorted**
   - Binary Search only works on sorted arrays
   - If the array isn't sorted, the results will be unpredictable

2. **Random Access**
   - The data structure must support efficient random access (O(1) time)
   - Arrays are perfect for this, linked lists are not

## Complexity Analysis

- **Space Complexity:** O(1)
  - Binary Search is an in-place algorithm
  - Only needs a constant amount of extra space for variables

- **Time Complexity:**
  - **Best Case:** O(1)
    - Target is found at the middle element
  - **Average Case:** O(log n)
    - Each step eliminates half of the remaining elements
  - **Worst Case:** O(log n)
    - Target is at the end or not in the array

## Advantages and Disadvantages

### Advantages
- Very efficient for large sorted datasets
- Logarithmic time complexity makes it much faster than linear search
- Consistent performance due to divide-and-conquer approach

### Disadvantages
- Only works on sorted arrays
- Requires random access to elements
- May be overkill for small arrays where linear search is faster
- Maintaining a sorted array has its own overhead

Binary Search is a fundamental algorithm that's widely used in computer science and forms the basis for many other efficient searching techniques.