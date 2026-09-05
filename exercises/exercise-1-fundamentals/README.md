# Exercise 1: JavaScript Fundamentals, Execution Context & Pure Functions

<div align="center">

### High Q Solid Academy &bull; JavaScript Core Lab 01
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: The V8 Execution Engine & Scoping

*Reference: JavaScript from Beginner to Professional (javascript.pdf, Chapters 1-4 & 6)*

### 1. The V8 Execution Context & The Call Stack
When JavaScript code runs inside Google Chrome or Node.js, the **V8 Engine** parses source code into an **Abstract Syntax Tree (AST)**, which is converted to bytecode by the **Ignition** interpreter and optimized into machine code by **TurboFan**.
- **Execution Context**: An abstract environment where JavaScript evaluates and executes code.
- **Call Stack**: A LIFO (Last-In, First-Out) data structure that keeps track of the currently executing function contexts.
- **Variable Scoping**:
  - `var`: Function-scoped, hoisted to the top of the function with an initial value of `undefined`.
  - `let` and `const`: Block-scoped (`{ ... }`), exist in the **Temporal Dead Zone (TDZ)** from the start of the block until declaration, preventing accidental usage before initialization.

```
Call Stack Execution:
+------------------------------------------------+
| isPassingGrade(75)    --> Evaluates score >= 50|
+------------------------------------------------+
| calculateAverage([..])--> Loops and returns avg|
+------------------------------------------------+
| Global Execution Context (Global variables)    |
+------------------------------------------------+
```

### 2. Pure Functions & Determinism
In High Q engineering standards, data transformation must always rely on **Pure Functions**:
1. **Determinism**: Given the exact same inputs, the function always returns the exact same output.
2. **No Side Effects**: Does not mutate external variables, make uncontrolled network requests, or modify global state.

```javascript
// PURE (Deterministic, Zero Side-Effects):
function calculateAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  return sum / scores.length;
}
```

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-1-fundamentals/math-utils.js`, implement and export:
1. `calculateAverage(scores)`:
   - Accepts an array of score numbers.
   - Calculates and returns the arithmetic mean.
   - Edge Case: If the array is empty or falsy, return `0`.
2. `isPassingGrade(score)`:
   - Accepts a numerical grade.
   - Returns `true` if `score >= 50`, otherwise `false`.
3. `formatStudentName(firstName, lastName)`:
   - Takes two strings (e.g. `"Quam"`, `"Adebule"`).
   - Returns uppercase string formatted as `"LASTNAME, FIRSTNAME"` (e.g. `"ADEBULE, QUAM"`).

---

## 🧪 Verification
Verify your implementation with:
```bash
npm.cmd test -- -t "Exercise 1"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
