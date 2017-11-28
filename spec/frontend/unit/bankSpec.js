"use strict";

describe("Bank", function() {
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  describe("::new", function() {
    it("should create new bank instance", function() {
      expect(bank instanceof Bank).toBe(true);
    });

    it("should be able to deposit 1000 ", function() {

      var bankDeposit = function() {
        bank.deposit(1000)
      };

      expect(bankDeposit).not.toThrow();

    });

    it("should be able to withdraw 500", function() {
      var bankWithdrawal = function() {
        bank.withdraw(500)
      };
      expect(bankWithdrawal).not.toThrow();

    });

    it("keeps transaction history and show balance ", function() {

      bank.deposit(1000)
      bank.withdraw(500)
      expect(bank.showBalance()).toEqual(500)

    });

    it("first element of the _transactions array is date/timeStamp now", function() {

      bank.deposit(1000);
      var transaction = bank.showTransaction();

      var timeNow = Date.now();
      var d = new Date(parseInt(timeNow, 10));
      var ds = d.toString('MM/dd/yy').slice(0, -24);

      expect(transaction[0]).toEqual(ds);

    });

    it("second element of the _transactions array shows credited amount", function() {

      bank.deposit(1000);
      var transaction = bank.showTransaction();

      expect(transaction[1]).toEqual(1000);

    });

    it("third element of the _transactions array shows debited amount", function() {
      bank.withdraw(600);
      var transaction = bank.showTransaction();

      expect(transaction[2]).toEqual(600);
    });

    it("seventh element of the _transactions array shows balance of the second transaction", function() {
      bank.deposit(1000);
      bank.withdraw(600);
      var transaction = bank.showTransaction();

      expect(transaction[7]).toEqual(400);
    });

    it("displays statement with correct format ", function() {
      bank.deposit(1000);
      bank.withdraw(600);
      var timeInSecond = Date.now();
      var transactions = bank.showTransaction();

      expect(bank.printPretty(transactions)).toEqual("Tue Nov 28 2017 || 1000 || N/A || 1000\rTue Nov 28 2017 || N/A || 600 || 400")

    });

  });
});
