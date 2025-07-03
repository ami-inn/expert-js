

# Bogo Sort

Bogo Sort is a highly inefficient sorting algorithm based on generating random permutations of the input until it happens to be sorted.

## How Bogo Sort Works

Suppose we have this array:

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order (smallest to largest).

Bogo Sort works by repeatedly shuffling the array randomly and checking if it is sorted. If not, it shuffles again, and repeats this process until the array is sorted.

Let's see how it works step by step:

### Steps

1. Check if the array is sorted.
    - If yes, stop.
    - If not, shuffle the array randomly.
2. Repeat step 1 until the array is sorted.

#### Example

Let's say the array starts as:

```
[7, 2, 12, 8, 3]
```

- Check if sorted: No.
- Shuffle: `[3, 7, 2, 12, 8]`
- Check if sorted: No.
- Shuffle: `[2, 3, 7, 8, 12]`
- Check if sorted: Yes! Done.

The number of shuffles needed is random and can be extremely large.

---

**Visualization:**

| Attempt | Array State         | Sorted? |
| ------- | ------------------ | ------- |
| 1       | 7 2 12 8 3         | No      |
| 2       | 3 7 2 12 8         | No      |
| 3       | 2 3 7 8 12         | Yes     |

Bogo Sort is extremely inefficient and is only used for educational purposes or as a joke.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Bogo Sort is in-place and does not require extra space.

- **Time Complexity:**
  - **Best Case:** O(n)
     - If the array is already sorted, only one check is needed.
  - **Average Case:** O((n × n!))
     - On average, it takes n! shuffles to randomly get a sorted array, and each shuffle/check takes O(n) time.
  - **Worst Case:** Unbounded
     - There is no guarantee the algorithm will finish in a reasonable time.

Bogo Sort is not practical for sorting real data and is mainly used to illustrate inefficient algorithms.
