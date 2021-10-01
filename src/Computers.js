const computers = [
    {
      cost: 2000,
      components: {
        gpu: 'Nvidia Geoforce GTX 1080ti',
        ram: '32GB',
        cpu: 'Intel Core i7'
      },
      isNew: false,
      isLaptop: false,
      accessories: ['mouse', 'keyboard', 'headset', 'rgb', 'darthVader']
    },
    {
      cost: 1200,
      components: {
        gpu: 'Radeon Pro Vega 20',
        ram: '32GB',
        cpu: 'Intel Core i9'
      },
      isNew: true,
      isLaptop: true,
      accessories: ['mouse', 'keyboard', 'liquidCooling', 'headset']
    },
    {
      cost: 2800,
      components: {
        gpu: 'NVIDIA Geforce RTX 2080',
        ram: '16GB',
        cpu: 'Intel Core i9'
      },
      isNew: true,
      isLaptop: false,
      accessories: ['mouse', 'keyboard', 'rgb']
    },
    {
      cost: 800,
      components: {
        gpu: 'Radeon Vega 10',
        ram: '8GB',
        cpu: 'Intel Core i5'
      },
      isNew: true,
      isLaptop: false,
      accessories: ['mouse', 'keyboard', 'rgb', 'microphone']
    }
  ]

  // Below, return an array of objects that are components for each computer: Answer:

// [
//   {
//     gpu: 'Nvidia Geoforce GTX 1080ti',
//     ram: '32GB',
//     cpu: 'Intel Core i7'
//   },
//   {
//     gpu: 'Radeon Pro Vega 20',
//     ram: '32GB',
//     cpu: 'Intel Core i9'
//   },
//   {
//     gpu: 'NVIDIA Geforce RTX 2080',
//     ram: '16GB',
//     cpu: 'Intel Core i9'
//   },
//   {
//     gpu: 'Radeon Vega 10',
//     ram: '8GB',
//     cpu: 'Intel Core i5'
//   },
// ]

const compoOnly = () => {
    return computers.reduce((acc, comp) => {
      acc.push(comp.components)
      return acc
    },[])
  }
  
  compoOnly()

  // Below, return the count of computers that are new: Answer: 3

const newComp = () => {
    return computers.reduce((acc, comp) => {
      if(comp.isNew) {
        acc++
      }
      return acc
    },0)
  }
  newComp()