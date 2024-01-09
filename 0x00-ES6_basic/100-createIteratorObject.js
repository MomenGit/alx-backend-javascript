export default function* createIteratorObject(report) {
  const { allEmployees } = report;
  let employeesList = [];

  for (const employees of Object.values(allEmployees)) {
    employeesList = employeesList.concat(employees);
  }
  yield employeesList;
}
