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

    describe('findByName', function() {
      it('should be a function', function() {
        assert.isFunction(findbyName)
      });

      it('should return the artists if a name is matched', function() {
        let search = findbyName('Gallant');
        expect(search).to.be.a('object');
        assert.equal(search.name, 'Gallant')
      });
      
      it('should return nothing is there is no match', function() {
        let noMatch = findbyName('Soups');
        assert.equal(noMatch, null)
      });
    });

    describe('ticketCost', function() {
      it('should be a function', function() {
        assert.isFunction(ticketCost)
      });

      it('should add the appropriate ticket price to each artist', function() {
        let prices = ticketCost();
        expect(prices).to.be.a('array');
        expect(prices).to.have.lengthOf(13);
        expect(prices[0]).to.have.property('price')
        assert.equal(prices[0].price, 20);
      });
    });

    describe('getByLabel', function() {
      it('should be a function', function() {
        assert.isFunction(getByLabel)
      });

      it('should return an array of all the artists with a specific label', function() {
        let sampleData = [  
          { name: 'SG Lewis', label: 'atlantic' },
          { name: 'Penguin Prison', label: 'atlantic' },
          { name: 'Future Islands', label: 'atlantic' }
        ];
        let label = getByLabel('atlantic');
        expect(label).to.be.a('array');
        expect(label).to.have.lengthOf(3);
        expect(label).to.deep.equal(sampleData)
      });
    });

    describe('allShowPrices', function() {
      it('should be a function', function() {
        assert.isFunction(allShowPrices)
      });

      it('should show the price of going to all the shows', function() {
        let allPrices = allShowPrices();
        expect(allPrices).to.be.a('number')
        expect(allPrices).to.equal(340)
      });
    });

    describe('labelArtists', function() {
      it('should be a function', function() {
        assert.isFunction(labelArtists)
      });

      it('should return an object with labels as the keys and artists as the value', function() {
        let artistsLabels = labelArtists();
        expect(artistsLabels).to.be.a('object')
        expect(artistsLabels).to.have.property('atlantic').with.lengthOf(3)
        expect(artistsLabels).to.have.property('virgin').with.lengthOf(4)
        expect(artistsLabels).to.have.property('capital').with.lengthOf(6)
      });
    });

    describe('crowdPerArt', function() {
      it('should be a function', function() {
        assert.isFunction(crowdPerArt)
      });

      it('should add the crowdsize to each artists', function() {
        let crowd = crowdPerArt();
        expect(crowd).to.be.a('array')
        expect(crowd[0]).to.have.property('crowdSize')
      });
    });
  });