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
    showStatement: function() {
      return this._statement;
    }

  };

  exports.Bank = Bank;
})(this);
