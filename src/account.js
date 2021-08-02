const Transaction = require('./transaction');

class Account extends Transaction {
  constructor(balance) {
    super(balance);
    this.balance = 0;
    this.transactions = [];
  }

  credit(amount) {
    this.balance += amount;
    this.addTransaction(this.deposit(amount));
  }

  debit(amount) {
    this.balance -= amount;
    this.addTransaction(this.withdraw(amount));
  }

  addTransaction() {
    this.transactions.push(this.log + this.balance);
  }
}

module.exports = Account;
