# Exercise 3: Interactive DOM Component

## 🎯 Objective
Use DOM manipulation (`document.querySelector`, `element.addEventListener`, `textContent`) to build an interactive score counter component.

## 📋 Requirements
Inside `counter.js`:
Implement `setupCounter(containerEl)`:
1. When called with a container DOM element containing:
   - `#count-display` (displaying initial number)
   - `#btn-increment` (increases score by 1)
   - `#btn-decrement` (decreases score by 1, but minimum is 0)
   - `#btn-reset` (resets score to 0)
2. Attach click event listeners so clicking each button updates the count in `#count-display`.
