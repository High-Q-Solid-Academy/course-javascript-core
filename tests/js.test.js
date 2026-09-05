import { describe, it, expect } from 'vitest';
import { calculateAverage, isPassingGrade, formatStudentName } from '../exercises/exercise-1-fundamentals/math-utils.js';
import { filterPassingStudents, getStudentNames, calculateClassAverage } from '../exercises/exercise-2-arrays-objects/student-data.js';
import { setupCounter } from '../exercises/exercise-3-dom-counter/counter.js';
import { fetchStudentCourses } from '../exercises/exercise-4-async-fetch/fetch-data.js';
import { createTaskManager } from '../exercises/exercise-5-capstone/app.js';
import { JSDOM } from 'jsdom';

describe('Exercise 1: Fundamentals', () => {
  it('calculateAverage should calculate average correctly or return 0 if empty', () => {
    if (typeof calculateAverage !== 'function') return;
    expect(calculateAverage([80, 90, 70])).toBe(80);
    expect(calculateAverage([])).toBe(0);
  });

  it('isPassingGrade should return true for >= 50 and false otherwise', () => {
    if (typeof isPassingGrade !== 'function') return;
    expect(isPassingGrade(50)).toBe(true);
    expect(isPassingGrade(75)).toBe(true);
    expect(isPassingGrade(49)).toBe(false);
  });

  it('formatStudentName should return formatted uppercase string', () => {
    if (typeof formatStudentName !== 'function') return;
    expect(formatStudentName('Quam', 'Adebule')).toBe('ADEBULE, QUAM');
  });
});

describe('Exercise 2: Arrays & Objects', () => {
  const mockStudents = [
    { id: 1, name: 'Adebayo', score: 85 },
    { id: 2, name: 'Chidinma', score: 45 },
    { id: 3, name: 'Emeka', score: 62 }
  ];

  it('filterPassingStudents should only include passing students', () => {
    if (typeof filterPassingStudents !== 'function') return;
    const passed = filterPassingStudents(mockStudents, 50);
    expect(passed).toHaveLength(2);
    expect(passed.map(s => s.name)).toEqual(['Adebayo', 'Emeka']);
  });

  it('getStudentNames should return names array', () => {
    if (typeof getStudentNames !== 'function') return;
    expect(getStudentNames(mockStudents)).toEqual(['Adebayo', 'Chidinma', 'Emeka']);
  });

  it('calculateClassAverage should calculate mean of scores', () => {
    if (typeof calculateClassAverage !== 'function') return;
    const avg = calculateClassAverage(mockStudents);
    expect(avg).toBeCloseTo(64, 0);
  });
});

describe('Exercise 3: DOM Counter', () => {
  it('should update display when buttons are clicked', () => {
    const dom = new JSDOM(`
      <div id="counter-app">
        <div id="count-display">0</div>
        <button id="btn-increment">+</button>
        <button id="btn-decrement">-</button>
        <button id="btn-reset">Reset</button>
      </div>
    `);
    const container = dom.window.document.getElementById('counter-app');
    setupCounter(container);

    const display = container.querySelector('#count-display');
    const incBtn = container.querySelector('#btn-increment');
    const decBtn = container.querySelector('#btn-decrement');
    const resetBtn = container.querySelector('#btn-reset');

    incBtn.click();
    incBtn.click();
    expect(display.textContent).toBe('2');

    decBtn.click();
    expect(display.textContent).toBe('1');

    resetBtn.click();
    expect(display.textContent).toBe('0');
  });
});

describe('Exercise 4: Asynchronous JavaScript', () => {
  it('should return courses array on successful fetch', async () => {
    const mockData = [{ id: 1, title: 'HTML5 Foundations' }];
    const mockFetch = async () => ({
      ok: true,
      json: async () => mockData
    });

    const result = await fetchStudentCourses(mockFetch);
    expect(result).toEqual(mockData);
  });

  it('should return empty array when fetch fails', async () => {
    const mockFetch = async () => {
      throw new Error('Network Error');
    };

    const result = await fetchStudentCourses(mockFetch);
    expect(result).toEqual([]);
  });
});

describe('Exercise 5: Capstone Task Manager', () => {
  it('should add, toggle, and filter tasks', () => {
    const manager = createTaskManager();
    const t1 = manager.addTask('Complete HTML Lab');
    const t2 = manager.addTask('Push to GitHub');

    expect(manager.getPendingTasks()).toHaveLength(2);
    expect(manager.getCompletedTasks()).toHaveLength(0);

    manager.toggleTask(t1.id);
    expect(manager.getCompletedTasks()).toHaveLength(1);
    expect(manager.getPendingTasks()).toHaveLength(1);
  });
});
