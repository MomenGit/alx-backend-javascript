export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }

  evacuationWarningMessage() {
    if (this.constructor !== Building) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }
}
