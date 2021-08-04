const Account = require('../src/account');

describe('Transaction', () => {
  let date;
  let account;
  beforeEach(() => {
    date = new Date();
    account = new Account();
  });

  test('i want a date with every transation i make', () => {
    account.credit(500);
    expect(account.transactions[0]).toEqual(`${date.toLocaleDateString('en-UK')} || 500.00 || || 500.00`);
  });

  test('view multiple transactions', () => {
    account.credit(500);
    account.debit(200);
    expect(account.transactions).toEqual(
      [`${date.toLocaleDateString('en-UK')} || 500.00 || || 500.00`,
        `${date.toLocaleDateString('en-UK')} || || 200.00 || 300.00`,
      ],
    );
  });
});
