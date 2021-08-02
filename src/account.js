class Account {
  constructor() {
    this.balance = 0;
    this.date = new Date();
    this.transactions = [];
  }

  credit(amount) {
    this.balance += amount;
    this.transactions.push(`${this.transactionDate()} || || ${amount} || ${this.balance}`);
  }

  debit(amount) {
    this.balance -= amount;
  }

  transactionDate() {
    return this.date.toLocaleDateString('en-UK');
  }
}

module.exports = Account;
