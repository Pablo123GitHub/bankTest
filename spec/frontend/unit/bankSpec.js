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

    it("has a function that returns seconds to a date timesstamp ", function() {

      var spyTime = 1511791808370;
      expect(bank.returnDate(spyTime)).toContain("Mon Nov 27 2017 14:10");

    });

    it("adds a new transaction to internal array arrTransaction when any transaction is performed", function() {

      bank.deposit(1000);
      bank.deposit(2000);
      var transactionTwo = bank.showTransactionArr();
      // console.log(transactionTwo);
      expect(transactionTwo.length).toEqual(2);


    });

    it("first element of the _transactions array is date/timeStamp now", function() {

      // var Date = {
      //   now: function(value) {
      //     bar = value;
      //   }
      // };
      //
      // spyOn(Date, "now").and.returnValue(1511791808370);

      bank.deposit(1000);
      var transaction = bank.showTransaction();

      var timeNow = Date.now();
      var d = new Date(parseInt(timeNow, 10));
      var ds = d.toString('MM/dd/yy HH:mm:ss');

      // expect(Date.now()).toEqual(1511791808370);
      expect(transaction[0]).toEqual(ds);

    });

    it("second element of the _transactions array shows credited amount", function() {

      bank.deposit(1000);
      var transaction = bank.showTransaction();
      // expect(Date.now()).toEqual(1511791808370);
      expect(transaction[1]).toEqual(1000);

    });








  });
});
