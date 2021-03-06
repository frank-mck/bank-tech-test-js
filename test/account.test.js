const Account = require('../src/account');

describe('Account', () => {
  let account;
  let date;
  beforeEach(() => {
    date = new Date().toLocaleDateString('en-UK');
    account = new Account();
  });

  test('account has a starting balance of zero', () => {
    expect(account.balance).toEqual(0);
  });

  test('credit my account with £500', () => {
    account.credit(500);
    expect(account.balance).toEqual(500);
  });

  test('withdraw £200 from my account', () => {
    account.credit(500);
    account.debit(200);
    expect(account.balance).toEqual(300);
  });

  test('customer can print a statement', () => {
    account.credit(500);
    account.debit(200);
    account.credit(500);
    account.debit(200);
    expect(account.printStatement()).toEqual(`date || credit || debit || balance\n${date} || 500.00 || || 500.00\n${date} || || 200.00 || 300.00\n${date} || 500.00 || || 800.00\n${date} || || 200.00 || 600.00`);
  });

  test('customer cannot withdraw amount that exeeds account balance', () => {
    expect(() => {
      account.debit(1);
    }).toThrowError(Error, 'amount exeeds account balance!');
  });
});
