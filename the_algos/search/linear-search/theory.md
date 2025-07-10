# Linear Search

Linear Search (also called Sequential Search) is the simplest searching algorithm that finds a target value within a list by checking each element sequentially.

## How Linear Search Works

Let's say we have this array and want to find the number 8:

```
[4, 2, 7, 1, 8, 3]
```

Linear Search works by examining each element in sequence until a match is found or the whole array has been searched.

Let's see how it works step by step:

### Search Process

1. Check first element (index 0):
   ```
   [4, 2, 7, 1, 8, 3]
    ↑
    4 ≠ 8
   ```

2. Move to second element (index 1):
   ```
   [4, 2, 7, 1, 8, 3]
       ↑
       2 ≠ 8
   ```

3. Check third element (index 2):
   ```
   [4, 2, 7, 1, 8, 3]
          ↑
          7 ≠ 8
   ```

4. Check fourth element (index 3):
   ```
   [4, 2, 7, 1, 8, 3]
             ↑
             1 ≠ 8
   ```

5. Check fifth element (index 4):
   ```
   [4, 2, 7, 1, 8, 3]
                ↑
                8 = 8 (Found!)
   ```

---

**Visualization:**

| Step | Current Element | Comparison | Result |
|------|-----------------|------------|--------|
| 1    | 4              | 4 ≠ 8      | Continue |
| 2    | 2              | 2 ≠ 8      | Continue |
| 3    | 7              | 7 ≠ 8      | Continue |
| 4    | 1              | 1 ≠ 8      | Continue |
| 5    | 8              | 8 = 8      | Found! |

## Key Characteristics

1. **Simplicity**
   - Easiest search algorithm to implement
   - No special requirements for data arrangement

2. **Flexibility**
   - Works on sorted or unsorted arrays
   - Can be used with any data type that can be compared

## Complexity Analysis

- **Space Complexity:** O(1)
  - Only needs a constant amount of extra space
  - No additional data structures required

- **Time Complexity:**
  - **Best Case:** O(1)
    - Target is found at the first position
  - **Average Case:** O(n)
    - Target is found somewhere in the middle
  - **Worst Case:** O(n)
    - Target is at the end or not in the array

## Advantages and Disadvantages

### Advantages
- Simple to understand and implement
- Works with unsorted data
- No preprocessing required
- Good for small arrays
- Memory efficient

### Disadvantages
- Slow for large datasets
- Not suitable when quick search response is required
- Inefficient compared to other search algorithms for large sorted arrays

Linear Search is best used when:
- The array is small
- The array is unsorted and sorting would be expensive
- You only need to search the array once
- Simplicity is more important than efficiency