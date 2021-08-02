const transaction = require('./transaction');

class Account extends transaction {
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

  printStatement() {
    this.transactions.unshift('date || credit || debit || balance');
    return this.transactions.join('\n');
  }
}

module.exports = Account;
