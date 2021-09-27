const philosophers = [
    {
      name: 'Georg Wilhelm Friedrich Hegel',
      born: 1770,
      died: 1831,
      school: 'Continental Philosophy',
      main_interests: ['Metaphysics', 'Epistemology', 'Logic', 'History of Philosophy', 'Political Philosophy', 'Aesthetics']
    },
    { 
      name: 'Bertrand Russell',
      born: 1872,
      died: 1970,
      school: 'Analytic Philosophy',
      main_interests: ['Logic', 'Ontology', 'Epistemology', 'Ethics', 'Mathematics', 'Philosophy of Mind', 'Philosophy of Religion', 'Philosophy of Language', 'Philosophy of Mathematics', 'Philosophy of Science', 'Set Theory']
    },
    { 
      name: 'David Lewis',
      born: 1941,
      died: 2001,
      school: 'Analytic Philosophy',
      main_interests: ['Logic', 'Language', 'Epistemology', 'Metaphysics', 'Ethics'],
    },
    { 
      name: 'Soren Keirkegaard',
      born: 1813,
      died: 1855,
      school: 'Continental Philosophy',
      main_interests: ['Christianity','Epistemology', 'Ethics', 'Metaphysics',
      'Philosophy of Christianity','Poetry',
      'Psychology']
    },
    { 
      name: 'William Van Orman Quine',
      born: 1908,
      died: 2000,
      school: 'Analytic Philosophy',
      main_interests: ['Logic', 'Ontology', 'Epistemology', 'Philosophy of Language', 'Philosophy of Mathematics', 'Philosophy of Science', 'Set Theory']
    }
  ]

  //Return an array of the names of all the philosophers who's school is 'Analytic Philosophy'
  const schools = philosophers.filter(phil => phil.school === 'Analytic Philosophy').map(person => person.name)

  // Return the age of the oldest philosopher 
  const getOldest = () => {
    let allAges = philosophers.reduce((acc, person) => {
      let age = person.died - person.born
      acc.push(age)
      return acc
    },[])
    allAges.sort((a, b) => {
      return a - b
    })
    return allAges[allAges.length - 1]
  } 
  getOldest()

  //Return an array of all the main interests with no duplicates.
const interests = () => {
    return philosophers.reduce((acc, person) => {
      person.main_interests.forEach(int => {
        if(!acc.includes(int)) {
          acc.push(int)
        } 
      })
    return acc
    }, [])  
    
  }
  interests()
  