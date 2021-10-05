var chai = require("chai");
var assert = chai.assert;
var expect = require("chai").expect;

var {
    findCarnivores,
    asianAnimals,
    findHome,
    weighingAnimals,
    zooMatch,
    fatAnimal,
    lightZoo,
    newZoos,
    maxAnimal,
    newZooObj,
    animalKey,
    continentKey
} = require('../src/AnimalsZoos.js');

describe('AnimalZoos', function() {
    let zooData
    beforeEach(function() {
        zooData = [{
            name: 'Central Park Zoo',
            maxWeight: 7000,
            typesAllowed:['Carnivore'],
            continents:['Africa', 'North America']
          },
            {
            name: 'San Antonio Zoo',
            maxWeight: 3000,
            typesAllowed:['Herbivore', 'Omnivore'],
            continents:['Asia', 'North America']
          }]
    })
    describe('findCarnivores', function() {
        it('should be a function', function() {
            assert.isFunction(findCarnivores);
        });
        it('should return only zoos that accept carnivores', function() {
            let zoos = findCarnivores();
            expect(zoos).to.be.a('array');
            expect(zoos).to.have.lengthOf(3);
        });
    });
    
    describe('asianAnimals', function() {
        it('should be a function', function() {
            assert.isFunction(asianAnimals);
        });
        it('should only return zoos that accept animals from Asia', function() {
            let asianZoos = asianAnimals();
            expect(asianZoos).to.be.a('array')
            expect(asianZoos).to.have.lengthOf(5)
            expect(asianZoos[0]).to.have.property('continents')
            assert.deepEqual(asianZoos[0].continents, [ 'Asia', 'North America'])
        });
    });

    describe('findHome', function() {
        it('should be a function', function() {
            assert.isFunction(findHome);
        });
        it('should return the home of a given animal', function() {
            let animalHomes = findHome('Tiger');
            expect(animalHomes).to.be.a('string')
            assert.equal(animalHomes, 'Africa')
        });
    });
})