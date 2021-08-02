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

  // eslint-disable-next-line class-methods-use-this
  date() {
    return new Date().toLocaleDateString('en-UK');
  }
}

module.exports = Transaction;
