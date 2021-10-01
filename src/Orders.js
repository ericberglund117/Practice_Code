const orders = [
    {
      type: 'cake',
      name: 'Strawberries & Cream Cake',
      price: 40,
      size: 6,
      customer: 'Olivia',
      specialConsiderations: 'gluten free*pick up on Thursday afternoon*birthday cake'
    },
    {
      type: 'tart',
      name: 'Chocolate Raspberry Tart',
      price: 25,
      size: 8,
      customer: 'Cody',
      specialConsiderations: 'pick up on Friday*no allergies'
    },
    {
      type: 'cake',
      name: 'Chocolate Cake',
      price: 40,
      size: 6,
      customer: 'Ramiro',
      specialConsiderations: 'olive oil allergy*add cream cheese icing*simple decoration'
    },
    {
      type: 'cake',
      name: 'Funfetti Cake',
      price: 0,
      size: 6,
      customer: 'Leta',
      specialConsiderations: 'none'
    }
  ];

  // Level One
// Write a function that will total up the profit of all orders.

// 105

function sumProfit() {
    return orders.reduce((acc, val) => {
      acc += val.price
      return acc
    }, 0)
  }
  
  sumProfit()

  // Level Two
// Refactor your function to organize your orders by type (ex: 'cake' and 'tart') - keeping track of the names and total profit for that type.

// {
//   cake: {
//     names: [ 'Strawberries & Cream Cake', 'Chocolate Cake', 'Funfetti Cake' ],
//     totalProfit: 80
//   },
//   tart: { 
//     names: [ 'Chocolate Raspberry Tart' ],
//     totalProfit: 25 
//   }
// }

const sumProfitRefactor = () => {
    return orders.reduce((acc, ord) => { 
      if(!acc[ord.type]){
        acc[ord.type] = {
          name: [ord.name],
          totalProfit: ord.price
        }
      } else {
        {
          name: acc[ord.type].name.push(ord.name)
          totalProfit: acc[ord.type].totalProfit += ord.price
        }
      }
      return acc
    }, {})
  }
  
  sumProfitRefactor()

  // Level Three
// Refactor your function to add in the special considerations for each type (make sure to exclude 'none').

// {
//   cake: {
//     names: [ 'Strawberries & Cream Cake', 'Chocolate Cake', 'Funfetti Cake' ],
//     totalProfit: 80,
//     specialConsiderations: [
//       'gluten free',
//       'pick up on Thursday afternoon',
//       'birthday cake',
//       'olive oil allergy',
//       'add cream cheese icing',
//       'simple decoration',
//     ]
//   },
//   tart: {
//     names: [ 'Chocolate Raspberry Tart' ],
//     totalProfit: 25,
//     specialConsiderations: [ 
//       'pick up on Friday', 
//       'no allergies' 
//     ]
//   }
// }

const special = () => {
    return orders.reduce((acc, order) => {
      if(!acc[order.type]){
        acc[order.type] = {
          name: [order.name], 
          totalProfit: [order.price], 
          specialConsiderations: [order.specialConsiderations]
          }
        } else {
          {
            name: acc[order.type].name.push(order.name) 
            totalProfit: acc[order.type].totalProfit += order.price
            specialConsiderations: acc[order.type].specialConsiderations.push(order.specialConsiderations)
          }
        }
      return acc
    },{})
  }
  special()