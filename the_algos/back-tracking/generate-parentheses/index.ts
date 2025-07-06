

const generateParenthesis = (n: number): string[] => {
  const result: string[] = [];
  
  const backtrack = (current: string, open: number, close: number) => {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  };
  
  backtrack('', 0, 0);
  return result;
}


// Test the algorithm
console.log("generateParenthesis(3):", generateParenthesis(3));
// Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log("generateParenthesis(2):", generateParenthesis(2));
// Output: ["(())","()()"]

// phases:
// 1. Start with an empty string and zero open and close parentheses.
// 2. Add an open parenthesis if the count of open parentheses is less than n.
// 3. Add a close parenthesis if the count of close parentheses is less than the
//    count of open parentheses.
// 4. When the length of the current string equals 2n, add it to the result.
// 5. Repeat until all combinations are generated.  
// 6. Return the result array containing all valid combinations of parentheses.
// 7. The algorithm uses backtracking to explore all possible combinations,
//    ensuring that at no point do we have more close parentheses than open ones.   
// 8. The time complexity is O(4^n / sqrt(n)), and the space complexity is O(4^n / sqrt(n))
//    due to the recursive stack and result storage.