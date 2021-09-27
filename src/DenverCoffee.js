const denverCoffeeShops = {
    'Crema Coffe House': {
      neighborhood: 'RiNo',
      isOpen: true,
      stars: 4.6
    },
    'Blue Sparrow': {
      neighborhood: 'RiNo',
      isOpen: false,
      stars: 4.7
    },
    'St. Marks Coffee House': {
      neighborhood: 'City Park',
      isOpen: true,
      stars: 4.5
    },
    'Maci Cafe': {
      neighborhood: 'LoHi',
      isOpen: true,
      stars: 4.8
    },
    'Hooked on Colfax': {
      neighborhood: 'City Park',
      isOpen: false,
      stars: 4.6
    },
     'Rooster Cat Coffee House': {
      neighborhood: 'Cap Hill',
      isOpen: false,
      stars: 4.6
    },
    'The Weathervane Cafe': {
      neighborhood: 'City Park',
      isOpen: true,
      stars: 4.8
    },
    'Black Eye Coffee': {
      neighborhood: 'LoHi',
      isOpen: false,
      stars: 4.5
    }
  };

  // Write a function that takes in a neighborhood, and returns the name of the first cofffee house in that neighborhood. 
// Example: fn(coffeeShops, 'City Park') -> 'St. Marks Coffee House'

const houses = (neigh) => {
    let keys = Object.keys(denverCoffeeShops)
    return keys.find(key => denverCoffeeShops[key].neighborhood === neigh)
  }
  houses('City Park')

  // Refactor your function to include a message if no coffee shop is found in that neighborhood. 
// Example fn(coffeeShops, 'Baker') -> Sorry, we can't find any coffee shops in Baker! 

const houses = (neigh) => {
    let keys = Object.keys(denverCoffeeShops)
    let match = keys.filter(key => denverCoffeeShops[key].neighborhood === neigh)
    if(match.length === 0) {
      return `Sorry, we can't find any coffee shops in ${neigh}!`
    } else {
      return match
    }
  }
  houses('Baker')

  // Refactor your function to return an array of all coffee shops in the given neighborhood instead of just the first one. 
// Example: fn(coffeeShops, 'Congress Park') -> ['St. Marks Coffee House', 'Hooked on Colfax', 'The Weathervane Cafe'];

const houses = (neigh) => {
    let keys = Object.keys(denverCoffeeShops)
    return keys.filter(key => denverCoffeeShops[key].neighborhood === neigh)
  }
  houses('City Park')

  // Refactor your function to only include the matching coffee shops that are currently open. 
// Example: fn(coffeeShops, 'City Park') -> ['St. Marks Coffee House', 'The Weathervane Cafe'];

const houses = (neigh) => {
    let keys = Object.keys(denverCoffeeShops)
    return keys.filter(key => denverCoffeeShops[key].neighborhood === neigh && denverCoffeeShops[key].isOpen)
  }
  houses('City Park')

  // Refactor your function so that if there are multiple coffee shop matches (matches both neighborhood and is open) the one with the highest rating will be returned. 
// Example: fn(coffeeShops, 'City Park') -> 'The Weathervane Cafe'

const houses = (neigh) => {
    let keys = Object.keys(denverCoffeeShops)
    let matches = keys.filter(key => denverCoffeeShops[key].neighborhood === neigh && denverCoffeeShops[key].isOpen)
   let highest = matches.sort((a, b) => {
      return denverCoffeeShops[b].stars - denverCoffeeShops[a].stars
    })
    return highest[0]
  }
  houses('City Park')