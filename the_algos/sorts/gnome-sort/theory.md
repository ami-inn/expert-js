# Gnome Sort

Gnome Sort is a simple sorting algorithm, similar in concept to insertion sort, but with a unique way of moving elements into place.

## How Gnome Sort Works

Gnome sort is a sort algorithm that moving an element to its proper place is accomplished by a series of swap

```
[7, 2, 12, 8, 3]
```

We want to sort it in ascending order (smallest to largest).

Gnome Sort works by moving through the array and swapping adjacent elements if they are in the wrong order. If a swap is made, it steps back to the previous element; if not, it moves forward. This process continues until the end of the array is reached.

Let's see how it works step by step:

### Step-by-Step Example

Start at the first element (index 0):

1. Compare **7** and **2**. Since 7 > 2, swap them and move back (can't go before index 0, so move forward).
    ```
    [2, 7, 12, 8, 3]
    ```
2. Compare **7** and **12**. 7 < 12, so move forward.
    ```
    [2, 7, 12, 8, 3]
    ```
3. Compare **12** and **8**. 12 > 8, so swap and move back.
    ```
    [2, 7, 8, 12, 3]
    ```
4. Compare **8** and **7**. 8 > 7, so move forward.
    ```
    [2, 7, 8, 12, 3]
    ```
5. Compare **12** and **3**. 12 > 3, so swap and move back.
    ```
    [2, 7, 8, 3, 12]
    ```
6. Compare **3** and **8**. 3 < 8, so swap and move back.
    ```
    [2, 7, 3, 8, 12]
    ```
7. Compare **3** and **7**. 3 < 7, so swap and move back.
    ```
    [2, 3, 7, 8, 12]
    ```
8. Compare **3** and **2**. 3 > 2, so move forward.
    ```
    [2, 3, 7, 8, 12]
    ```
9. Continue moving forward; all elements are in order.

Now the array is sorted!

---

**Visualization:**

| Step | Array State                        | Action                        |
|------|------------------------------------|-------------------------------|
| 1    | 7 2 12 8 3 → 2 7 12 8 3           | Swap 7 and 2, move forward    |
| 2    | 2 7 12 8 3                        | 7 < 12, move forward          |
| 3    | 2 7 12 8 3 → 2 7 8 12 3           | Swap 12 and 8, move back      |
| 4    | 2 7 8 12 3                        | 8 > 7, move forward           |
| 5    | 2 7 8 12 3 → 2 7 8 3 12           | Swap 12 and 3, move back      |
| 6    | 2 7 8 3 12 → 2 7 3 8 12           | Swap 8 and 3, move back       |
| 7    | 2 7 3 8 12 → 2 3 7 8 12           | Swap 7 and 3, move back       |
| 8    | 2 3 7 8 12                        | 3 > 2, move forward           |
| 9    | 2 3 7 8 12                        | Sorted                        |

Gnome Sort is easy to understand and implement, but like Bubble Sort, it is not efficient for large lists.

## Complexity Analysis

- **Space Complexity:** O(1)

  - Gnome Sort is an in-place algorithm; it only needs a constant amount of extra space.

- **Time Complexity:**
  - **Best Case:** O(n)
     - Occurs when the array is already sorted.
  - **Average Case:** O(n²)
     - Typical performance when elements are in random order.
  - **Worst Case:** O(n²)
     - Happens when the array is sorted in reverse order.

Gnome Sort is simple and intuitive, but not suitable for large datasets due to its inefficiency.