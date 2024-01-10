import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.displayFullCurrency()}`;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw TypeError('Currency must be a Currency');
    }
    this._currency = val;
  }

  get currency() {
    return this._currency;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = val;
  }

  get amount() {
    return this._amount;
  }
}
