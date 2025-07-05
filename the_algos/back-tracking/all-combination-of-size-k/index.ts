const generateCombinations = (n:number,k:number):number[][] => {
  const result:number[][] = [];
  const backtrack = (start:number, path:number[]) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(1, []);
  return result;
}

// Test the algorithm
console.log("generateCombinations(4, 2):", generateCombinations(4, 2));
// Output: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]

console.log("generateCombinations(5, 3):", generateCombinations(5, 3));
// Output: [[1,2,3], [1,2,4], [1,2,5], [1,3,4], [1,3,5], [1,4,5], [2,3,4], [2,3,5], [2,4,5], [3,4,5]]

console.log("generateCombinations(3, 1):", generateCombinations(3, 1));
// Output: [[1], [2], [3]]

