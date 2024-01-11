interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 = {
  firstName: 'student1',
  lastName: 'teacher1',
  age: 10,
  location: 'class 2',
};

const student2 = {
  firstName: 'student2',
  lastName: 'teacher2',
  age: 10,
  location: 'class 2',
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const headerRow: HTMLTableRowElement = thead.insertRow();

headerRow.innerHTML = '<th>First Name</th><th>Location</th>';

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

table.append(thead);
table.append(tbody);
document.body.append(table);
