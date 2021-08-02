/* eslint-disable class-methods-use-this */
class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  credit(amount) {
    this.balance += amount;
    this.transactions.push(`${this.transactionDate()} || || ${amount} || ${this.balance}`);
  }

  debit(amount) {
    this.balance -= amount;
    this.transactions.push(`${this.transactionDate()} || ${amount} || || ${this.balance}`);
  }

  transactionDate() {
    return new Date().toLocaleDateString('en-UK');
  }
}

module.exports = Account;
