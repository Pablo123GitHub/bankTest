// Understands how to keep count.

"use strict";

(function(exports) {
    function PrintPretty() {

    };

    PrintPretty.prototype = {
      printPretty: function(transactions) {
        var transactionFormatted = [];
        var newResult = [];
        for (let i = 0; i < transactions.length; i++) {
          transactionFormatted.push(transactions[i])
          if (transactionFormatted.length % 4 == 0) {
            var transLength = transactionFormatted.length;
            newResult.push(transactionFormatted.slice(transLength - 4, transLength));
          }
        };
        var finalResult = newResult.map(x => x.join(" || "));
        return finalResult.join("\r");
      }
    };
  }


  exports.PrintPretty = PrintPretty;
})(this);
