// TODO: Implement the functions according to README.md

export function filterPassingStudents(students, passThreshold = 50) {
  // Use filter()
  return students.filter(student => student.score >= passThreshold);
}

export function getStudentNames(students) {
  // Use map()
  return students.map(student => student.name);
}

export function calculateClassAverage(students) {
  // Use reduce()
  if (!students.length) return 0;
  const total = students.reduce((sum, student) => sum + student.score, 0);
  return total / students.length;
}
