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