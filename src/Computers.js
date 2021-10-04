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


// Below return an array of computers that have 32GB of ram and then sort by price low -> high: Answer will be:
// [
//   {
//     cost: 1200,
//     components: {
//       gpu: 'Radeon Pro Vega 20',
//       ram: '32GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: true,
//     accessories: ['mouse', 'keyboard']
//   },
//   {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'RGB']
//   }
// ]

const comp32 = () => {
    return computers.filter(comp => comp.components.ram === '32GB').sort((a,b) => a.cost - b.cost)
  }
  comp32()

  // Below return an array of computers that use NVIDIA gpu's: Answer:
// [
//  {
//     cost: 2000,
//     components: {
//       gpu: 'Nvidia Geoforce GTX 1080ti',
//       ram: '32GB',
//       cpu: 'Intel Core i7'
//     },
//     isNew: false,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'headset', 'rgb', 'darthVader']
//   },
//   {
//     cost: 2800,
//     components: {
//       gpu: 'NVIDIA Geforce RTX 2080',
//       ram: '16GB',
//       cpu: 'Intel Core i9'
//     },
//     isNew: true,
//     isLaptop: false,
//     accessories: ['mouse', 'keyboard', 'rgb']
//   },
// ]  

const nvidia = () => {
    return computers.reduce((acc,comp) =>  {
      let value = /NVIDIA|Nvidia/.test(comp.components.gpu);
      if(value) {
        acc.push(comp)
      } 
      return acc
    },[])
  }
  nvidia()

  //Below return an array of all possible accessories from all computers and then sort alphabetically: Answer will be :

//[ 'darthVader', 'headset', 'keyboard', 'liquidCooling', 'microphone', 'mouse', 'rgb' ]


// __________________________________________________________________________________________________________________________________

// (*Delete this & Enter Solution For Above Here*)

const accessAlpha = () => {
    return computers.reduce((acc, comp) => {
      comp.accessories.map(access => {
        if(!acc.includes(access)) {
          acc.push(access)
        }
      })
      acc.sort()
      return acc
    }, [])
  }
  accessAlpha()