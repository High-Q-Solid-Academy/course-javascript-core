# Exercise 5: Capstone — High Q Task & Homework Tracker

## 🎯 Objective
Combine your knowledge of DOM manipulation, arrays, event handling, and localStorage to build a functional Task Tracker application.

## 📋 Requirements
Inside `app.js`:
Implement `createTaskManager()` which manages a list of tasks with:
1. `addTask(title)`: Adds task object `{ id: Date.now(), title, completed: false }`. Returns the new task.
2. `toggleTask(id)`: Flips the `completed` boolean of the task with matching id.
3. `getCompletedTasks()`: Returns array of completed tasks.
4. `getPendingTasks()`: Returns array of tasks that are not yet completed.
