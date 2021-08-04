/* eslint-disable */
class Transaction {
  constructor() {
    this.log = undefined;
  }

  deposit(amount) {
    this.log = `${this.date()} || ${amount} || || `;
  }

  withdraw(amount) {
    this.log = `${this.date()} || || ${amount} || `;
  }

  date() {
    return new Date().toLocaleDateString('en-UK');
  }
}