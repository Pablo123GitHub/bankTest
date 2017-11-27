// Understands how to keep count.

"use strict";

(function(exports) {
  function Bank() {
    this._statement = 0;
  };

  Bank.prototype = {
    deposit: function(amount) {
      this._statement += amount;

    },
    withdraw: function(amount) {
      this._statement -= amount;
    },
    showBalance: function() {
      return this._statement;
    },

    returnDate: function(timeInSecond) {
      var d = new Date(parseInt(timeInSecond, 10));
      var ds = d.toString('MM/dd/yy HH:mm:ss');
return ds
    }



  };

  exports.Bank = Bank;
})(this);
