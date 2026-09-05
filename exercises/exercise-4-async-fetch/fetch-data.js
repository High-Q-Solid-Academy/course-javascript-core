// TODO: Implement fetchStudentCourses using async/await and try/catch
export async function fetchStudentCourses(fetchFn) {
  try {
    const response = await fetchFn();
    if (!response.ok) {
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}
