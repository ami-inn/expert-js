# Shell Sort

Shell Sort is an improved version of insertion sort that allows the exchange of items that are far apart. It works by sorting elements at specific intervals (called gaps) and gradually reducing the gap until it becomes 1, at which point it performs a final insertion sort pass.

## How Shell Sort Works

1. Choose a gap sequence (commonly, start with half the array length).
2. For each gap, sort the elements that are that gap apart using insertion sort.
3. Reduce the gap and repeat the process.
4. When the gap is 1, the array is fully sorted.

Shell Sort significantly reduces the number of shifts required compared to regular insertion sort, making it more efficient for medium-sized arrays.

## Example

Suppose we want to sort the array `[12, 34, 54, 2, 3]` using Shell Sort with a gap sequence of n/2, n/4, ..., 1:

1. **Initial array:** `[12, 34, 54, 2, 3]`
2. **Gap = 2:**  
    - Compare and sort elements 2 apart:  
      - `[12, 34, 54, 2, 3]` → `[12, 34, 3, 2, 54]`
3. **Gap = 1:**  
    - Perform standard insertion sort:  
      - `[12, 34, 3, 2, 54]` → `[3, 12, 2, 34, 54]` → `[2, 3, 12, 34, 54]`

**Sorted array:** `[2, 3, 12, 34, 54]`



## Complexity Analysis

- **Space Complexity:** O(1)
    - Shell Sort is in-place and requires only a constant amount of extra space.

- **Time Complexity:**
    - **Best Case:** O(n log n)
        - Depends on the gap sequence; some sequences yield better performance.
    - **Average Case:** Between O(n log n) and O(n²)
    - **Worst Case:** O(n²)
        - With poor gap choices, performance can degrade.

Shell Sort is faster than bubble and insertion sorts, especially for larger arrays, but not as fast as more advanced algorithms like quicksort or mergesort.