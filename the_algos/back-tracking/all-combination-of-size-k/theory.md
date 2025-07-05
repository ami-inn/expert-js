## Theory: Generating Combinations Using Backtracking

This algorithm generates all unique combinations (subsets of a specific size) from a sequence of numbers. Specifically, it finds all possible ways to choose `k` numbers from the range `1` to `n` (inclusive), where the order of numbers in each combination does not matter, and each combination is sorted in ascending order.

### Use Case

A common use case is in combinatorial problems, such as:
- Generating lottery ticket possibilities
- Selecting teams or groups from a larger set
- Solving problems that require exploring all possible selections (e.g., subset sum, k-combinations in statistics)

### How It Works

The algorithm uses **backtracking** to build combinations incrementally:
1. **Start** with an empty combination.
2. **At each step**, add the next possible number to the current combination.
3. **Recursively** continue adding numbers, each time reducing the number of selections left (`k`).
4. **When `k` reaches 0**, a valid combination is found and saved.
5. **Backtrack** by removing the last added number and trying the next candidate.

#### Example Flow

Suppose `n = 4`, `k = 2`. The goal is to find all 2-number combinations from `[1, 2, 3, 4]`.

- Start with `[]`
- Add `1` → `[1]`
    - Add `2` → `[1,2]` (save)
    - Add `3` → `[1,3]` (save)
    - Add `4` → `[1,4]` (save)
- Backtrack to `[]`, add `2` → `[2]`
    - Add `3` → `[2,3]` (save)
    - Add `4` → `[2,4]` (save)
- Backtrack to `[]`, add `3` → `[3]`
    - Add `4` → `[3,4]` (save)

**Result:** `[[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]`

### Visual Representation

```
Start: []
 ├─ [1]
 │   ├─ [1,2] ✔
 │   ├─ [1,3] ✔
 │   └─ [1,4] ✔
 ├─ [2]
 │   ├─ [2,3] ✔
 │   └─ [2,4] ✔
 └─ [3]
         └─ [3,4] ✔
```

### Key Points

- **Backtracking** avoids unnecessary work by pruning paths that can't lead to valid combinations.
- Each combination is built in ascending order, ensuring uniqueness and no duplicates.
- Efficient for generating all possible k-sized subsets from a set.
