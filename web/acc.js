/* eslint-disable */
class Account {
  constructor(transaction = new Transaction()) {
    this.balance = 0;
    this.transactions = [];
    this.Transaction = transaction;
  }

  credit(amount) {
    this.balance += amount;
    this.addTransaction(this.Transaction.deposit(amount.toFixed(2)));
  }

  debit(amount) {
    if (this.balance - amount < 0) {
      throw new Error('amount exeeds account balance!');
    } else {
      this.balance -= amount;
      this.addTransaction(this.Transaction.withdraw(amount.toFixed(2)));
    }
  }

  addTransaction() {
    this.transactions.push(this.Transaction.log + this.balance.toFixed(2));
  }

  printStatement() {
    this.transactions.unshift('date || credit || debit || balance');
    return this.transactions.forEach(log => console.log(log));
  }
}