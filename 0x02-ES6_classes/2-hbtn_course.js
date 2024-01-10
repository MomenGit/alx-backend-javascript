export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = val;
  }

  get length() {
    return this._length;
  }

  set students(val) {
    if (!Array.isArray(val)) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = val;
  }

  get students() {
    return this._students;
  }
}
