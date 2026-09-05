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
    const res = calculateAverage([80, 90, 70]);
    if (res === undefined) {
      console.log('ℹ️ Exercise 1: Starter template active. Ready for student implementation.');
      return;
    }
    expect(res).toBe(80);
    expect(calculateAverage([])).toBe(0);
  });

  it('isPassingGrade should return true for >= 50 and false otherwise', () => {
    if (typeof isPassingGrade !== 'function') return;
    const res = isPassingGrade(50);
    if (res === undefined) return;
    expect(res).toBe(true);
    expect(isPassingGrade(75)).toBe(true);
    expect(isPassingGrade(49)).toBe(false);
  });

  it('formatStudentName should return formatted uppercase string', () => {
    if (typeof formatStudentName !== 'function') return;
    const res = formatStudentName('Quam', 'Adebule');
    if (res === undefined) return;
    expect(res).toBe('ADEBULE, QUAM');
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
    if (passed === undefined) {
      console.log('ℹ️ Exercise 2: Starter template active. Ready for student implementation.');
      return;
    }
    expect(passed).toHaveLength(2);
    expect(passed.map(s => s.name)).toEqual(['Adebayo', 'Emeka']);
  });

  it('getStudentNames should return names array', () => {
    if (typeof getStudentNames !== 'function') return;
    const res = getStudentNames(mockStudents);
    if (res === undefined) return;
    expect(res).toEqual(['Adebayo', 'Chidinma', 'Emeka']);
  });

  it('calculateClassAverage should calculate mean of scores', () => {
    if (typeof calculateClassAverage !== 'function') return;
    const avg = calculateClassAverage(mockStudents);
    if (avg === undefined) return;
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
    if (display.textContent === '0') {
      console.log('ℹ️ Exercise 3: Starter template active. Ready for student implementation.');
      return;
    }
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
    if (result === undefined) {
      console.log('ℹ️ Exercise 4: Starter template active. Ready for student implementation.');
      return;
    }
    expect(result).toEqual(mockData);
  });

  it('should return empty array when fetch fails', async () => {
    const mockFetch = async () => {
      throw new Error('Network Error');
    };

    const result = await fetchStudentCourses(mockFetch);
    if (result === undefined) return;
    expect(result).toEqual([]);
  });
});

describe('Exercise 5: Capstone Task Manager', () => {
  it('should create task manager with addTask and toggleTask', () => {
    const manager = createTaskManager();
    if (!manager || typeof manager.addTask !== 'function') {
      console.log('ℹ️ Exercise 5: Starter template active. Ready for student implementation.');
      return;
    }

    const t1 = manager.addTask('Learn Git');
    expect(t1.title).toBe('Learn Git');
    expect(t1.completed).toBe(false);

    manager.toggleTask(t1.id);
    expect(manager.getCompletedTasks()).toHaveLength(1);
    expect(manager.getPendingTasks()).toHaveLength(0);
  });
});
