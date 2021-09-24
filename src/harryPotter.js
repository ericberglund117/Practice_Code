let students = [
    {
      name: 'Hermione',
      gender: 'female',
      house: 'Gryffindor',
      pointsForHouse: 50,
      personality: ['logical', 'kind', 'just', 'book worm']
    },
    {
      name: 'Harry',
      gender: 'male',
      house: 'Gryffindor',
      pointsForHouse: 35,
      personality: ['brave', 'loyal', 'selfless', 'courage']
    },
    {
      name: 'Ron',
      gender: 'male',
      house: 'Gryffindor',
      pointsForHouse: -5,
      personality: ['stubborn', 'strategist', 'loyal', 'passionate']
    },
    {
      name: 'Luna',
      gender: 'female',
      house: 'Ravenclaw',
      pointsForHouse: 15,
      personality: ['whimsical', 'quiet', 'dependable']
    },
    {
      name: 'Cedric',
      gender: 'male',
      house: 'Hufflepuff',
      pointsForHouse: 20,
      personality: ['brave', 'just', 'modest']
    },
    {
      name: 'Draco',
      gender: 'male',
      house: 'Slytherin',
      pointsForHouse: 30,
      personality: ['cunning', 'arrogant', 'jealous']
    },
    {
      name: 'Pansy',
      gender: 'female',
      house: 'Slytherin',
      pointsForHouse: 10,
      personality: ['leader', 'selfish', 'team-player']
    },
    {
      name: 'Cho',
      gender: 'female',
      house: 'Ravenclaw',
      pointsForHouse: 20,
      personality: ['brave', 'loyal', 'intelligent', 'extrovert']
    }
  ]
  
  let houseHeads = {
    McGonagall: 'Gryffindor',
    Snape: 'Slytherin',
    Sprout: 'Hufflepuff',
    Flitwick: 'Ravenclaw'
  }
  
  //Problems 1-3 use everything above, problems 4-5 use the hogwarts object 
  
  let hogwarts = {
    classes: [
      { name: 'Transfiguration', instructor: 'McGonagall', type: 'core' },
      { name: 'Charms', instructor: 'Flitwick', type: 'core' },
      { name: 'Potions', instructor: 'Snape', type: 'core' },
      { name: 'History of Magic', instructor: 'P. Binns', type: 'core' },
      { name: 'Defence Against the Dark Arts', instructor: 'N/A', type: 'core' },
      { name: 'Astronomy', instructor: 'P. Sinistra', type: 'core' },
      { name: 'Herbology', instructor: 'Sprout', type: 'core' },
      { name: 'Arithmancy', instructor: 'P. Vector', type: 'elective' },
      { name: 'Muggle Studies', instructor: 'P. Burbage', type: 'elective' },
      { name: 'Divination', instructor: 'P. Trelawney', type: 'elective' },
      { name: 'Study of Ancient Runes', instructor: 'P. Babbling', type: 'elective' },
      { name: 'Care of Magical Creatures', instructor: 'Hagrid', type: 'elective' }
    ],
    rooms: ['Great Hall', 'Kitchens', 'Ravenclaw House', 'Slytherin House', 'Gryffindor House', 'Hufflepuff House', 'Instructor quarters', 'Headmasters Office', 'Hospital Wing', 'Chamber of Secrets', 'Greenhouses', 'Astronomy Tower'],
    populations: {
      students: 280,
      professors: 15,
      ghosts: 22,
      'house elves': 100,
    },
    founders: ['Godrick Gryffindor', 'Helga Hufflepuff', 'Rowena  Ravenclaw', 'Salazar Slytherin'],
    currentHeadmaster: {
      name: 'Albus Percival Wulfric Brian Dumbledore',
      age: 115,
      alive: true,
      wand: '15 inch Elder Thestral tail hair core',
      gender: 'male',
      'eye color': 'Blue',
      family: [
        { father: 'Percival', alive: false },
        { mother: 'Kendra', alive: false },
        { sister: 'Ariana', alive: false },
        { brother: 'Aberforth', alive: true }
      ]
    }
  }


//Problem 1.1
// Create a function where you can put the name of a house head
// and get back the student objects that in that house

const houseSearch = (head) => {
  return students.filter(stud => stud.house === houseHeads[head])
}
houseSearch('Snape')


//Problem 1.2
//Can you make the array send back only the names of the students?

const houseSearch = (head) => {
  let filtStuds = students.filter(stud => stud.house === houseHeads[head])
  return filtStuds.map(stud => stud.name)
}
houseSearch('Snape')

// Problem 2.1
//How many house points have been added to the house cups overall?

const totalPoints = students.reduce((acc, stud) => {
    acc += stud.pointsForHouse
    return acc
  }, 0)
  console.log(totalPoints)

  //Problem 2.2
//How many house points have the Ravenclaw folks added to their cup?

const ravenPoints = students.reduce((acc, stud) => {
    if(stud.house === 'Ravenclaw') {
      acc += stud.pointsForHouse
    }
    return acc
  }, 0) 
  console.log(ravenPoints)

  // Problem 3.1
//For all students excpet the Slytherins, add a property called 'currentlyAttending' with a value of true. For Slytherins, add make it false

const addKey = students.map(stud => {
    let attendValue 
    if(stud.house === 'Slytherin') {
      attendValue = false
    } else {
      attendValue = true
    }
    Object.assign(stud, {currentlyAttending: attendValue})
    return stud
  })
  
  console.log(addKey)

  //Problem 3.2
// Return the class that each house head is teaching

const headClasses = () => {
    let houseKeys = Object.keys(houseHeads)
    return hogwarts.classes.reduce((acc, hogClass) => {
      houseKeys.map(head => {
        if(!acc[head]) {
          acc[head] 
        }
        if(head === hogClass.instructor) {
          acc[head] = hogClass.name
        } 
      })
      return acc
    }, {})
  }
  headClasses()

  //Problem 5.2
//Which one of Dumbledore's family members are alive? RETURN JUST THE NAME, not an array of object

const aliveFam = () => {
    let match = hogwarts.currentHeadmaster.family.filter(fam => fam.alive)
    let person = match.pop()
    return person.brother
  }
  aliveFam()