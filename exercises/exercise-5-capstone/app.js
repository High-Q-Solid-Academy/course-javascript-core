// TODO: Implement createTaskManager
export function createTaskManager() {
  let tasks = [];

  return {
    addTask(title) {
      const task = { id: Date.now() + Math.random(), title, completed: false };
      tasks.push(task);
      return task;
    },
    toggleTask(id) {
      const task = tasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
      }
      return task;
    },
    getCompletedTasks() {
      return tasks.filter(t => t.completed);
    },
    getPendingTasks() {
      return tasks.filter(t => !t.completed);
    },
    getAllTasks() {
      return [...tasks];
    }
  };
}
