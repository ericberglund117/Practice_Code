// created by Patrick Goulding--IronFE

const animals = [
    {
      name:'Rhino',
      weight: 1700,
      type: 'Herbivore',
      home: 'Africa'
    },
    {
      name:'Grizly Bear',
      weight: 800,
      type: 'Omnivore',
      home: 'North America'
    },
    {
      name:'Monkey',
      weight: 60,
      type: 'Herbivore',
      home: 'Africa'
    },
      {
      name:'Lion',
      weight: 400,
      type: 'Carnivore',
      home: 'Africa'
    },
      {
      name:'Tiger',
      weight: 600,
      type: 'Carnivore',
      home: 'Africa'
    },
    {
      name:'Wolf',
      weight: 90,
      type: 'Carnivore',
      home: 'North America'
    },
    {
      name: 'Panda',
      weight: 700,
      type: 'Herbivore',
      home: 'Asia'
    }
  ]
  
  
  const zoos = [
    {
      name: 'Denver Zoo',
      maxWeight: 10000,
      typesAllowed:['Herbivore', 'Omnivore'],
      continents:['Africa', 'Asia', 'North America']
    },
    {
      name: 'Bronx Zoo',
      maxWeight: 5000,
      typesAllowed:['Herbivore'],
      continents:['Africa', 'Asia', 'North America']
    },
    {
      name: 'San Diego Wild Animal Park',
      maxWeight: 7500,
      typesAllowed:['Herbivore', 'Carnivore'],
      continents:['Asia', 'North America']
    },
    {
      name: 'Kansas City Zoo',
      maxWeight: 8000,
      typesAllowed:['Omnivore', 'Carnivore'],
      continents:['Africa', 'Asia']
    },
    {
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
    },
  ]
  
  // return an array with all the zoos that allow Carnivores
  
  
  // findCarnivores()
  // e.g.
  // [ { name: 'San Diego Wild Animal Park',
  //     maxWeight: 7500,
  //     typesAllowed: [ 'Herbivore', 'Carnivore' ],
  //     continents: [ 'Asia', 'North America' ] },
  //   { name: 'Kansas City Zoo',
  //     maxWeight: 8000,
  //     typesAllowed: [ 'Omnivore', 'Carnivore' ],
  //     continents: [ 'Africa', 'Asia' ] },
  //   { name: 'Central Park Zoo',
  //     maxWeight: 7000,
  //     typesAllowed: [ 'Carnivore' ],
  //     continents: [ 'Africa', 'North America' ] } ]
  
  const findCarnivores = () => {
    return zoos.filter(zoo => zoo.typesAllowed.includes('Carnivore'))
  }

  // return an array of zoos that can take animals from Asia

  //e.g.
//  [ { name: 'Denver Zoo',
//     maxWeight: 10000,
//     typesAllowed: [ 'Herbivore', 'Omnivore' ],
//     continents: [ 'Africa', 'Asia', 'North America' ] },
//   { name: 'Bronx Zoo',
//     maxWeight: 5000,
//     typesAllowed: [ 'Herbivore' ],
//     continents: [ 'Africa', 'Asia', 'North America' ] },
//   { name: 'San Diego Wild Animal Park',
//     maxWeight: 7500,
//     typesAllowed: [ 'Herbivore', 'Carnivore' ],
//     continents: [ 'Asia', 'North America' ] },
//   { name: 'Kansas City Zoo',
//     maxWeight: 8000,
//     typesAllowed: [ 'Omnivore', 'Carnivore' ],
//     continents: [ 'Africa', 'Asia' ] },
//   { name: 'San Antonio Zoo',
//     maxWeight: 3000,
//     typesAllowed: [ 'Herbivore', 'Omnivore' ],
//     continents: [ 'Asia', 'North America' ] } ]

const asianAnimals = () => {
    return zoos.filter(zoo => zoo.continents.includes('Asia'))
  }
  

// make a function that takes an animal name and returns their home continent
// e.g.
// findHome('Tiger')
// returns => 'Africa'

const findHome = (name) => {
    let ani = animals.find(animal => animal.name === name)
    return ani.home
  }


  // make a function that takes a quanitity and a animal name and returns their total weight
//e.g. 
// weighingAnimals('Wolf', 6)
// returns => 540

const weighingAnimals = (pet, quant) => {
    let ani = animals.find(animal => animal.name === pet)
    return ani.weight * quant
  }


// return an array with the zoos that can take a Wolf
// remember that it has to match the type and continent

// e.g.
// returns => 
//  [ { name: 'San Diego Wild Animal Park',
//     maxWeight: 7500,
//     typesAllowed: [ 'Herbivore', 'Carnivore' ],
//     continents: [ 'Asia', 'North America' ] },
//   { name: 'Central Park Zoo',
//     maxWeight: 7000,
//     typesAllowed: [ 'Carnivore' ],
//     continents: [ 'Africa', 'North America' ] } ]

const zooMatch = (pet) => {
    let ani = animals.find(animal => animal.name === pet)
    return zoos.filter(zoo => {
      return zoo.typesAllowed.includes(ani.type) && zoo.continents.includes(ani.home)
    })
  }


// find the animal that weighs the most.

const fatAnimal = () => {
    let weights = animals.sort((a, b) => {
      return b.weight - a.weight
    })
    return weights[0]
  }

  // find the zoo with the least weight allowed.
const lightZoo = () => {
    let zooWeights = zoos.sort((a,b) => {
      return a.maxWeight - b.maxWeight
    })
    return zooWeights[0]
  }

  // create an array of objects with the zoo properties && just the names of the animals allowed in it.

const newZoos = () => {
    let response = zoos.map(zoo => {
      let animalArr = []
      let match = animals.filter(animal => {
        if(zoo.typesAllowed.includes(animal.type) && zoo.continents.includes(animal.home)) {
          animalArr.push(animal.name)
        }
      })
      return {name: zoo.name, maxWeight: zoo.maxWeight, typesAllowed: zoo.typesAllowed, continents: zoo.continents, animalsAllowed: animalArr}
    })  
    return response
  };

  ////////////////// BONUS ROUND!!!! ///////////////////

// find the max amount of each animal in a specific zoo


const maxAnimal = () => {
    let allZoos = []
    zoos.reduce((acc, zoo) => {
      animals.map(animal => {
        let num = Math.round(zoo.maxWeight / animal.weight)
        if(!acc["name"]) {
        acc["name"] = zoo.name
        } else {
        acc["name"] = zoo.name
        }
  
        if(!acc[`max${animal.name}Allowed`]) {
        acc[`max${animal.name}Allowed`] = num
        } else {
        acc[`max${animal.name}Allowed`] = num
        }
      })
  
      if(!allZoos.includes(zoo.name)) {
        allZoos.push(acc)
      } else {
        allZoos.push(acc)
      }
      return {...acc} 
    }, {})
    return allZoos
  }

// create a new object with the zoo name as the key and the animals allowed as the value
const newZooObj = () => {
    let response = zoos.map(zoo => {
      let animalArr = []
      animals.filter(animal => {
        if(zoo.typesAllowed.includes(animal.type) && zoo.continents.includes(animal.home)) {
          animalArr.push(animal.name)
        }
      })
      return {[zoo.name]: animalArr}
    })  
    return response
  }

// e.g.
// { 'Denver Zoo': [ 'Rhino', 'Grizly Bear', 'Monkey', 'Panda' ],
//   'Bronx Zoo': [ 'Rhino', 'Monkey', 'Panda' ],
//   'San Diego Wild Animal Park': [ 'Wolf', 'Panda' ],
//   'Kansas City Zoo': [ 'Lion', 'Tiger' ],
//   'Central Park Zoo': [ 'Lion', 'Tiger', 'Wolf' ],
//   'San Antonio Zoo': [ 'Grizly Bear', 'Panda' ] }

// create an object with the animal name as the key, and the zoos allowed as the value

// e.g.
// { Rhino: [ 'Denver Zoo', 'Bronx Zoo' ],
//   'Grizly Bear': [ 'Denver Zoo', 'San Antonio Zoo' ],
//   Monkey: [ 'Denver Zoo', 'Bronx Zoo' ],
//   Lion: [ 'Kansas City Zoo', 'Central Park Zoo' ],
//   Tiger: [ 'Kansas City Zoo', 'Central Park Zoo' ],
//   Wolf: [ 'San Diego Wild Animal Park', 'Central Park Zoo' ],
//   Panda:
//    [ 'Denver Zoo',
//      'Bronx Zoo',
//      'San Diego Wild Animal Park',
//      'San Antonio Zoo' ] }

// create an object with the continents as the keys and the animals on that continent as the value

//e.g.

//  { 
//  Africa:
//  [ { name: 'Rhino', weight: 1700, type: 'Herbivore', home: 'Africa' },
//    { name: 'Monkey', weight: 60, type: 'Herbivore', home: 'Africa' },
//    { name: 'Lion', weight: 400, type: 'Carnivore', home: 'Africa' },
//    { name: 'Tiger', weight: 600, type: 'Carnivore', home: 'Africa' } ],
// 'North America':
//  [ { name: 'Grizly Bear',
//      weight: 800,
//      type: 'Omnivore',
//      home: 'North America' },
//    { name: 'Wolf',
//      weight: 90,
//      type: 'Carnivore',
//      home: 'North America' } ],
// Asia:
//  [ { name: 'Panda', weight: 700, type: 'Herbivore', home: 'Asia' } ] 
//  }