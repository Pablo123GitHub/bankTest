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

    })
  });
});
