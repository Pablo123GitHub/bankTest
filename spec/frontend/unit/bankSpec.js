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

    it("keeps transaction history and show money left in bank account ", function() {

      bank.deposit(1000)
      bank.withdraw(500)
      expect(bank.showStatement()).toEqual(500)

    });


  });
});
