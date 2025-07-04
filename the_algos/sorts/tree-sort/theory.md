# Tree Sort

Tree Sort is a sorting algorithm that uses a **binary search tree (BST)** to sort elements. It works by first inserting all elements from the list into a BST, then performing an **in-order traversal** of the tree to retrieve the elements in sorted order.

## How Tree Sort Works

Let's sort the same array as before:

```
[7, 2, 12, 8, 3]
```

### Step 1: Build the Binary Search Tree

Insert each element into the BST:

1. Insert **7** (root)
2. Insert **2** (left of 7)
3. Insert **12** (right of 7)
4. Insert **8** (left of 12)
5. Insert **3** (right of 2)

The BST looks like this:

```
    7
     / \
    2   12
     \  /
     3 8
```

### Step 2: In-Order Traversal

An in-order traversal visits nodes in this order: **left subtree → node → right subtree**.

- Visit left subtree of 7 (2)
  - Visit left (none)
  - Visit 2
  - Visit right (3)
    - Visit left (none)
    - Visit 3
    - Visit right (none)
- Visit 7
- Visit right subtree of 7 (12)
  - Visit left (8)
    - Visit left (none)
    - Visit 8
    - Visit right (none)
  - Visit 12
  - Visit right (none)

The sorted order from the traversal: **2, 3, 7, 8, 12**

---

**Visualization:**

| Step         | BST Structure                | Output (in-order) |
| ------------ | --------------------------- | ----------------- |
| Insert 7     | 7                           |                   |
| Insert 2     | 7<br>↙️ 2                    |                   |
| Insert 12    | 7<br>↙️ 2  ↘️ 12              |                   |
| Insert 8     | 7<br>↙️ 2  ↘️ 12<br>         |                   |
|              |           ↙️ 8               |                   |
| Insert 3     | 7<br>↙️ 2  ↘️ 12<br>         |                   |
|              |   ↘️ 3     ↙️ 8              |                   |
| In-order     |                             | 2, 3, 7, 8, 12    |

Tree Sort is efficient if the tree is balanced, but can degrade to O(n²) if the tree becomes skewed (like a linked list).

## Complexity Analysis

- **Space Complexity:** O(n)
  - Each element is stored in a node of the BST.

- **Time Complexity:**
  - **Best/Average Case:** O(n log n)
    - If the tree is balanced.
  - **Worst Case:** O(n²)
    - If the tree is unbalanced (e.g., inserting sorted data into a simple BST).

Tree Sort is not commonly used in practice, but it demonstrates the connection between data structures (BSTs) and sorting algorithms.