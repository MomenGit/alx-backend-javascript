export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = val;
  }

  get code() {
    return this._code;
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
}
