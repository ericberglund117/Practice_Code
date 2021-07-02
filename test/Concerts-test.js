var chai = require("chai");
var assert = chai.assert;
var expect = require('chai').expect;

var {
    artistsNames,
    findbyName,
    ticketCost,
    getByLabel,
    allShowPrices,
    labelArtists,
    crowdPerArt
} = require('../src/Concerts');

describe("Concerts", function() {
    describe("artistsNames", function() {
      it("should be a function", function () {
        assert.isFunction(artistsNames);
      });
    });
  });