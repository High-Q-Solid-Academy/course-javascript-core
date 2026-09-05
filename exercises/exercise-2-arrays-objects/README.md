# Exercise 2: Functional Array Transformations & Object Manipulation

<div align="center">

### High Q Solid Academy &bull; JavaScript Core Lab 02
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: Higher-Order Functions & Immutability

*Reference: JavaScript from Beginner to Professional (javascript.pdf, Chapters 3, 5 & 6)*

### 1. Higher-Order Functions (HOFs)
In JavaScript, functions are **First-Class Citizens**: they can be assigned to variables, passed as arguments to other functions, and returned from functions. Functions that accept other functions as arguments are known as **Higher-Order Functions**:
- `Array.prototype.map(callback)`: Transforms every element in an array into a new value, returning a new array of identical length.
- `Array.prototype.filter(callback)`: Evaluates a predicate function on every element, returning a new array containing only elements where the predicate returned truthy.
- `Array.prototype.reduce(callback, initialValue)`: Iteratively collapses an array into a single accumulated value (e.g. a sum, average, or dictionary map).

```
The Accumulator Model of Array.prototype.reduce:
Initial Value (0)
  + score[0] (85) -> 85
  + score[1] (72) -> 157
  + score[2] (90) -> 247
Final Accumulated Total = 247
```

### 2. Immutability in Modern Frontend Architecture
Mutating arrays directly using `array.push()` or mutating object properties directly leads to unpredictable side-effects, especially in reactive frameworks like React and Vue.
- **Rule**: Always create new array/object references using the **Spread Operator (`...`)** or non-mutating methods (`map`, `filter`, `slice`).

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-2-arrays-objects/student-data.js`:

Each student object has the schema:
```javascript
{ id: 1, name: "Adebayo", score: 85, track: "HTML" }
```

Implement and export:
1. `filterPassingStudents(students, passThreshold = 50)`:
   - Returns a new array of only students whose `score >= passThreshold`.
   - Do not mutate the original `students` array.
2. `getStudentNames(students)`:
   - Uses `map` to return an array of strings representing only student names.
3. `calculateClassAverage(students)`:
   - Uses `reduce` to calculate the class average score across all students.
   - If the student array is empty, return `0`.

---

## 🧪 Verification
Verify your implementation with:
```bash
npm.cmd test -- -t "Exercise 2"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
