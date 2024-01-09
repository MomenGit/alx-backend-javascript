export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const employee of reportWithIterator) {
    employees = `${employees} | ${employee}`;
  }
  employees = employees.slice(3);
  return employees;
}
