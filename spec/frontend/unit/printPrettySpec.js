"use strict";

describe("PrintPretty", function() {
  var printPretty;
  var bank, bar;
  var timeInSecond, d, ds, transactions;

  beforeEach(function() {
    printPretty = new PrintPretty();
    bank = {
      showTransaction: function() {
        return bar;
      }
    };
    timeInSecond = Date.now();
    d = new Date(parseInt(timeInSecond, 10));
    ds = d.toString('MM/dd/yy').slice(0, -24);

    spyOn(bank, "showTransaction").and.returnValue([ds, 1000, "N/A", 1000, ds, "N/A", 600, 400]);

  });

  it("bank double shows correct array value ", function() {

    expect(bank.showTransaction()).toEqual([ds, 1000, "N/A", 1000, ds, "N/A", 600, 400])

  });
  it("formats nicely the array of value with printPretty function", function() {
    var transactions = bank.showTransaction();

    expect(printPretty.printPretty(transactions)).toEqual(`${ds} || 1000 || N/A || 1000\r${ds} || N/A || 600 || 400`)

  });

});
