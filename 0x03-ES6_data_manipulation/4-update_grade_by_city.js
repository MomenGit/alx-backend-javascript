export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .map((student) => {
      const newStudent = student;
      const newGrade = newGrades.find(
        (grade) => grade.studentId === student.id,
      );

      newStudent.grade = newGrade !== undefined ? newGrade : 'N/A';
      return newStudent;
    })
    .filter((student) => student.location === city);
}
