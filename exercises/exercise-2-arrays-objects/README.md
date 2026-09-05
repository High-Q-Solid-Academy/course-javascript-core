# Exercise 2: Arrays & Objects Mastery

## 🎯 Objective
Use higher-order array methods (`map`, `filter`, `reduce`) to process structured student records.

## 📋 Requirements
Inside `student-data.js`:

Each student object has the shape:
```javascript
{ id: 1, name: "Adebayo", score: 85, track: "HTML" }
```

Implement and export:
1. `filterPassingStudents(students, passThreshold = 50)`:
   - Returns a new array of only students whose score is greater than or equal to `passThreshold`.
2. `getStudentNames(students)`:
   - Returns an array of only student name strings.
3. `calculateClassAverage(students)`:
   - Returns the average score of all students in the array. Returns 0 if empty.
