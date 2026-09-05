// TODO: Implement the functions according to README.md

export function calculateAverage(scores) {
  // Return the average of scores or 0 if array is empty
  if (!scores.length) return 0;
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

export function isPassingGrade(score) {
  // Return true if score >= 50, otherwise false
  return score >= 50;
}

export function formatStudentName(firstName, lastName) {
  // Return uppercase "LASTNAME, FIRSTNAME"
  return `${lastName}, ${firstName}`.toUpperCase();
}
