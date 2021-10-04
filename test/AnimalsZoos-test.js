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
    describe('findCarnivores', function() {
        it('should be a function', function() {
            assert.isFunction(findCarnivores);
        });
    })
})