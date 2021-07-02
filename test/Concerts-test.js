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
      
      it('should return only the artists names in an array', function() {
        let names = artistsNames();
        expect(names).to.be.a('array');
        expect(names).to.have.lengthOf(13);
      });
    });
  });