## Theory: Generating Valid Parentheses Combinations Using Backtracking

This algorithm generates all possible combinations of well-formed (valid) parentheses for a given number of pairs `n`. The goal is to construct all strings of length `2n` that represent valid arrangements of `n` opening `'('` and `n` closing `')'` parentheses, such that every opening parenthesis is properly closed.

### Use Case

Common use cases include:
- Parsing and validating expressions in compilers or interpreters
- Generating test cases for algorithms that process nested structures
- Solving combinatorial problems involving balanced strings or bracket sequences

### How It Works

The algorithm uses **backtracking** to build valid parentheses strings step by step:
1. **Start** with an empty string and zero counts for both open and close parentheses.
2. **At each step**, you can:
    - Add an opening parenthesis `'('` if the count of open parentheses used so far is less than `n`.
    - Add a closing parenthesis `')'` if the count of close parentheses is less than the count of open parentheses (to maintain validity).
3. **Recursively** continue building the string, updating the counts accordingly.
4. **When the string reaches length `2n`**, a valid combination is found and saved.
5. **Backtrack** by removing the last added parenthesis and trying the next valid option.

#### Example Flow

Suppose `n = 2`. The goal is to generate all valid combinations of 2 pairs of parentheses.

- Start with `""`
    - Add `'('` → `"("`
        - Add `'('` → `"(("`
            - Add `')'` → `"(()"`
                - Add `')'` → `"(())"` (save)
        - Add `')'` → `"()"` 
            - Add `'('` → `"()("`
                - Add `')'` → `"()()"` (save)

**Result:** `["(())", "()()"]`

### Visual Representation
