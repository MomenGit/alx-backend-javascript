export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    this._size = val;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    this._location = val;
  }

  toString() {
    return this.location;
  }

  valueOf() {
    return this.size;
  }
}
