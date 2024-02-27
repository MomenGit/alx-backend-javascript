#!/usr/bin/node
const fs = require('node:fs');

function processStudentsData(csv) {
  const lines = csv.split('\n');
  lines.pop();
  lines.shift();
  const students = lines.map((element) => {
    const student = element.split(',');
    return {
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    };
  });
  return students;
}

function processFieldStudents(students, field) {
  return students.filter((student) => student.field === field);
}

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const students = processStudentsData(data);
  const fields = new Set(students.map((value) => value.field));
  const studentsByField = [];
  fields.forEach((field) =>
    studentsByField.push({
      fieldName: field,
      fieldStudents: processFieldStudents(students, field),
    }),
  );

  console.log(`Number of students: ${students.length}`);
  studentsByField.forEach((value) => {
    console.log(
      `Number of students in ${value.fieldName}: ${value.fieldStudents.length}.`,
      `List: ${value.fieldStudents.map((value) => value.firstName).join(', ')}`,
    );
  });
}

module.exports = countStudents;
