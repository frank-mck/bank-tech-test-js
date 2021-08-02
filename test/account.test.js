const Account = require('../src/account');

describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });

  test('account has a starting balance of zero', () => {
    expect(account.balance).toEqual(0);
  });
});
