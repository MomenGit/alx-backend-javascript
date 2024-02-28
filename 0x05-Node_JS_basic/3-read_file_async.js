#!/usr/bin/node
const fs = require('fs/promises');

function processStudentsData(csv) {
  const lines = csv.trim().split('\n');
  lines.shift();
  const students = lines
    .filter((value) => value !== '')
    .map((element) => {
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

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = processStudentsData(data);
    const fields = new Set(students.map((value) => value.field));
    const studentsByField = [];
    fields.forEach((field) => studentsByField.push({
      fieldName: field,
      fieldStudents: processFieldStudents(students, field),
    }));
    console.log(`Number of students: ${students.length}`);
    studentsByField.forEach((value) => {
      const studentNames = value.fieldStudents
        .map((value) => value.firstName)
        .join(', ')
        .trim();
      const line = `Number of students in ${value.fieldName}: ${value.fieldStudents.length}. List: ${studentNames}`;
      console.log(line);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
