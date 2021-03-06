// Understands how to keep count.

"use strict";


(function(exports) {
  function Bank() {
    this._statement = 0;
    this._arrWithTransactions = [];
    this._transactions = [];
    this._printPretty = new PrintPretty();

  };

  Bank.prototype = {
    deposit: function(amount) {
      this._statement += amount;
      var timeNow = Date.now();
      var d = new Date(parseInt(timeNow, 10));
      var ds = d.toString('MM/dd/yy').slice(0, -24);
      this._transactions.push(ds);
      this._transactions.push(amount);
      this._transactions.push("N/A");
      this._transactions.push(this._statement);
    },

    withdraw: function(amount) {
      this._statement -= amount;
      // var timeNow = Date.now();
      // var d = new Date(parseInt(timeNow, 10));
      // var ds = d.toString('MM/dd/yy').slice(0, -24);
      var dateString = this.formatDateStamp()
      this.insertTransaction(dateString);
      this.insertTransaction("N/A");
      this.insertTransaction(amount);
      this.insertTransaction(this._statement);

    },

    formatDateStamp: function() {
      var timeNow = Date.now();
      var d = new Date(parseInt(timeNow, 10));
      var ds = d.toString('MM/dd/yy').slice(0, -24);
      return ds;
    },

    showBalance: function() {
      return this._statement;
    },

    showTransaction: function() {
      return this._transactions;
    },

    insertTransaction: function(transaction) {
      this._transactions.push(transaction)
    },

    printPretty: function(transactions) {

      return this._printPretty.printPretty(transactions);

    },
    printStatement: function(transactions) {

      let result = this._printPretty.printPretty(transactions);
      let header = this._printPretty.printHeader();
      let finalResult = header + "\r" + result;
      return finalResult;
    }

  };

  exports.Bank = Bank;
})(this);
