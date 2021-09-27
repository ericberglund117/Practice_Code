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