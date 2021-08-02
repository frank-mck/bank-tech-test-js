const Bank = require('../src/bank');

describe('Bank', () => {
  beforeEach(() => {
    bank = new Bank();
  });

  describe('bank account', () => {
    test ('has zero starting balance', () => {
      expect(bank.balance).toEqual(0);
    });
  });
});