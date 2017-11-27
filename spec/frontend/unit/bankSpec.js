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


  });
});
