// Understands how to keep count.

"use strict";

(function(exports) {
  function Bank() {
    this._statement = 0;
    this._arrWithTransactions = [];
    this._transactions = []

  };

  Bank.prototype = {
    deposit: function(amount) {
      this._statement += amount;
      var timeNow = Date.now();
      var d = new Date(parseInt(timeNow, 10));
      var ds = d.toString('MM/dd/yy HH:mm:ss');
      this._transactions.push(ds);
      this._transactions.push(amount);
      this._transactions.push("");
      this._transactions.push(this._statement);


      this._arrWithTransactions.push(this._transactions);

    },

    withdraw: function(amount) {
      this._statement -= amount;
      var timeNow = Date.now();
      var d = new Date(parseInt(timeNow, 10));
      var ds = d.toString('MM/dd/yy HH:mm:ss');
      this._transactions.push(ds);
      this._transactions.push("");
      this._transactions.push(amount);
      this._transactions.push(this._statement);


      this._arrWithTransactions.push(this._transactions);

    },

    showBalance: function() {
      return this._statement;
    },

    returnDate: function(timeInSecond) {

      var d = new Date(parseInt(timeInSecond, 10));
      var ds = d.toString('MM/dd/yy HH:mm:ss');
      return ds
    },

    showTransactionArr: function() {
      return this._arrWithTransactions;
    },

    showTransaction: function() {
      return this._transactions;
    },


    insertTransactionInArr: function(transArr) {
      this._arrWithTransactions.push(transArr);
    },

    insertTransaction: function(transaction) {
      this.transactions.push(transaction)
    },



  };

  exports.Bank = Bank;
})(this);
