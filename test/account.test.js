const Account = require('../src/account');

describe('Account', () => {
  let account;
  beforeEach(() => {
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
});
