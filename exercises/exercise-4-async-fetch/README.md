# Exercise 4: Asynchronous JavaScript, The Event Loop & Fetch API

<div align="center">

### High Q Solid Academy &bull; JavaScript Core Lab 04
**"Always Ahead of Others"**

</div>

---

## 📖 Theoretical Foundations: The Asynchronous Event Loop & Promises

*Reference: JavaScript from Beginner to Professional (javascript.pdf, Chapter 13: Concurrency)*

### 1. The Single-Threaded Non-Blocking Architecture
JavaScript is single-threaded, meaning it has only one Call Stack and can only execute one command at a time. To perform time-consuming operations (like HTTP network requests or file reads) without freezing the entire browser UI, the browser utilizes the **Event Loop** and **Web APIs**:

```
[ Call Stack (Single-Threaded) ] <----------------------------------+
              |                                                     |
              v (Offload async network I/O)                         |
       [ Web APIs (Fetch, Timers) ]                                 |
              |                                                     |
              v (On completion, queue callback)                     |
+-------------------------------------------------------------+     |
| Microtask Queue: Promises (High Priority)                   | ----+ (Event Loop)
+-------------------------------------------------------------+     |
| Macrotask / Task Queue: setTimeout, DOM Events              | ----+
+-------------------------------------------------------------+
```

### 2. Promises & `async`/`await`
A **Promise** represents an eventual completion or failure of an asynchronous operation and its resulting value.
A Promise is always in one of three mutually exclusive states:
1. **`pending`**: Initial state, neither fulfilled nor rejected.
2. **`fulfilled`**: Operation completed successfully (`resolve(value)`).
3. **`rejected`**: Operation failed (`reject(error)`).

The modern `async` and `await` keywords provide clean sequential syntax for asynchronous operations:
- An `async` function implicitly wraps its return value in a Promise.
- The `await` keyword pauses execution of the surrounding async function until the awaited Promise settles.

### 3. HTTP Network Error Handling with Fetch
Calling `fetch()` only rejects on catastrophic network failures (e.g. DNS failure, offline network). An HTTP 404 (Not Found) or 500 (Server Error) **still resolves normally** with `response.ok = false`.
Therefore, robust production code must always inspect `response.ok`:
```javascript
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
const data = await response.json();
```

---

## 📋 Hands-On Lab Instructions

Inside `exercises/exercise-4-async-fetch/fetch-data.js`:
Implement and export `fetchStudentCourses(mockFetchFn)`:
1. Call `await mockFetchFn()`.
2. Inspect `response.ok`:
   - If `true`, call and return `await response.json()`.
   - If `false`, handle gracefully and return an empty array `[]`.
3. Wrap your execution in a `try...catch` block so that any network exceptions or JSON parsing failures are caught and cleanly return `[]`.

---

## 🧪 Verification
Verify your implementation with:
```bash
npm.cmd test -- -t "Exercise 4"
```

---

<div align="center">
  <sub>High Q Solid Academy &bull; <a href="https://highqsolidacademy.com">highqsolidacademy.com</a></sub>
</div>
