"use strict";
const treeSort = (array) => {
    if (array.length === 0)
        return [];
    // Create a binary search tree (BST) from the array
    const bst = new BST();
    for (const value of array) {
        bst.insert(value);
    }
    // Perform in-order traversal to get sorted elements
    const sortedArray = [];
    bst.inOrderTraversal(node => sortedArray.push(node.value));
    return sortedArray;
};
class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    inOrderTraversal(callback) {
        this.inOrder(this.root, callback);
    }
    inOrder(node, callback) {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node);
            this.inOrder(node.right, callback);
        }
    }
}
// Example usage
const unsortedArra = [4, 10, 3, 5, 1];
console.log("Unsorted array:", unsortedArra);
const sortedArrayy = treeSort(unsortedArra);
console.log("Sorted array:", sortedArrayy);
// Output: Sorted array: [1, 3, 4, 5, 10]
// Explanation of phases:
// 1. Build BST from array: [4, 10, 3, 5, 1]
//    Insert 4:      4
//    Insert 10:     4
//                     \
//                     10
//    Insert 3:      4
//                  /  \
//                 3   10
//    Insert 5:      4
//                  /  \
//                 3   10
//                      /
//                     5
//    Insert 1:      4
//                  /  \
//                 3   10
//                /    /
//               1    5
//
// 2. In-order traversal steps (left, root, right):
//    Visit 1 -> 3 -> 4 -> 5 -> 10
//    Sorted array: [1, 3, 4, 5, 10]
