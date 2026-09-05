# Exercise 4: Asynchronous JavaScript & Fetch API

## 🎯 Objective
Use `async`/`await`, `fetch`, and `try/catch` to retrieve data from an API and safely format it.

## 📋 Requirements
Inside `fetch-data.js`:

Implement `fetchStudentCourses(mockFetchFn)`:
1. `mockFetchFn` returns a Promise that resolves to an HTTP-like Response object:
   ```javascript
   { ok: true, json: async () => [ { id: 1, title: "Git Foundations" } ] }
   ```
2. If `response.ok` is true, return the parsed JSON array.
3. If `response.ok` is false or the network rejects, catch the error and return an empty array `[]`.
