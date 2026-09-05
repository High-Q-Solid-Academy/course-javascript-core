# Exercise 5: Capstone — High Q Task Manager & Portal Interactivity

<div align="center">

### High Q Solid Academy &bull; JavaScript Core Lab 05 (Capstone)
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: Closures & State Encapsulation

*Reference: JavaScript from Beginner to Professional (javascript.pdf, Chapters 6 & 11)*

### 1. Lexical Scope & Closures
A **closure** is the combination of a function bundled together with references to its surrounding lexical environment.
- In JavaScript, every inner function has access to the variables of its outer enclosing function even after the outer function has finished executing and returned!
- This pattern allows developers to create **private state variables** that cannot be tampered with or modified from the outside window context:

```javascript
function createTaskManager() {
  // PRIVATE STATE: Cannot be accessed or modified directly outside
  let tasks = [];

  return {
    addTask(title) {
      const task = { id: Date.now(), title, completed: false };
      tasks.push(task);
      return task;
    },
    getCompletedTasks() {
      return tasks.filter(t => t.completed);
    }
  };
}
```

### 2. High Q 25-Step Spiral Integration: The Interactive Student Portal
In Steps 13-15 of the High Q methodology, students combine:
1. HTML structural forms (Login & Signup).
2. CSS Grid & Flexbox layouts (Dashboard & Courses).
3. JavaScript Event Listeners & Closures (Task Tracker & Course Enrollment).
4. Web Storage API (`localStorage`): Persisting active user sessions across page reloads.

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-5-capstone/app.js`:
Implement and export `createTaskManager()`:
1. Initialize an internal private array of task items.
2. `addTask(title)`:
   - Creates a new task object: `{ id: Date.now(), title, completed: false }`.
   - Appends it to internal state and returns the newly created task.
3. `toggleTask(id)`:
   - Finds the task with matching `id` and inverts its `completed` boolean (`true` becomes `false`, `false` becomes `true`).
4. `getCompletedTasks()`:
   - Returns a filtered array containing only completed tasks (`completed === true`).
5. `getPendingTasks()`:
   - Returns a filtered array containing only pending tasks (`completed === false`).

---

## 🧪 Verification
Verify your implementation with:
```bash
npm.cmd test -- -t "Exercise 5"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
