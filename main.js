//Concerts-IronFE

const artists = [
    { name: 'SG Lewis', label: 'atlantic' },
    { name: 'HONNE', label: 'virgin' },
    { name: 'BORNS', label: 'capital' },
    { name: 'Leisure', label: 'capital' },
    { name: 'St. Lucia', label: 'capital' },
    { name: 'Gallant', label: 'capital' },
    { name: 'Marcus Marr', label: 'virgin' },
    { name: 'Penguin Prison', label: 'atlantic' },
    { name: 'Future Islands', label: 'atlantic' },
    { name: 'Roosevelt', label: 'capital' },
    { name: 'Jack Garratt', label: 'capital' },
    { name: 'Chet Faker', label: 'virgin' },
    { name: 'Sam Sparro', label: 'virgin' }
  ];
  
  const ticketPrice = {
    atlantic: 20,
    virgin: 25,
    capital: 30
  };
  
  const crowd = {
    atlantic: 20,
    virgin: 100,
    capital: 100100000,
  }
  
  
  //Level 1
  
  //Question 1:
  // Return an array of just the artists names
  
  const artistsNames = artists.map(art => art.name)
  
  
  //Question 2:
  
  // Write a function that takes a name as a parameter and returns the first artist where the name matches .  ex. findByName('Jack Garratt')
  
  const findbyName = (name) => {
    return artists.find(art => art.name === name)
  }
  
  findbyName('Jack Garratt')
  //Question 3:
  
  // Write some code to add the appropriate ticket price to each artist.
  
  const ticketCost = artists.map(art => {
    return {name: art.name, label: art.label, price: ticketPrice[art.label]}
  })
  
  
  //Question  4:
  
  // Write a function that takes a label as a parameter and returns an array containing all the artists of that label .  ex. getByLabel('atlantic')
  
  const getByLabel = (label) => {
    return artists.filter(art => art.label === label)
  }
  
  getByLabel('atlantic')
  
  
  //Question 5:
  
  // Write some code to determine how much it would cost to go to all to the shows
  
  let showPrices = artists.map(art => {
    return {name: art.name, label: art.label, price: ticketPrice[art.label]}
  })
  
  let onlyPrices = showPrices.map(show => show.price)
  onlyPrices.reduce((acc, price) => {
    acc += price
    return acc
  }, 0)
  
  
  
  //Question 6:
  
  // Make an object containing each label as keys and all the associated artists in an array as the value.
  
  const labelArtists = artists.reduce((acc, art) => {
    if(!acc[art.label]) {
      acc[art.label] = [art.name]
    } else {
      acc[art.label].push(art.name)
    }
    return acc 
  }, {})
  
  
  //Question 7:
  //write some code that will add the crowdsize to each artist

 const crowdPerArt = artists.map(art => {
    return {name: art.name, label: art.label, crowdSize: crowd[art.label]}
  })


