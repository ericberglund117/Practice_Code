const murder = {
    "bestShow": "Murder, She Wrote",
    "location": "Cabot Cove, Maine",
    "yearEst": 1984,
    "numOfEpisodes": 264,
    "topFiveEpisodes": [
      {
        name: "Birds of a Feather",
        season: 1,
        episode: 2,
        synopsis: "Drag murderer suspect",
        culturallyInsensitive: true,
        guestStars: [
          "Jeff Conaway",
          "Gabe Kaplan",
          "Martin Landau"
        ]
      },
      {
        name: "My Johnny Lies Over the Ocean",
        season: 1,
        episode: 13,
        synopsis: "Mayhem at sea",
        culturallyInsensitive: false,
        guestStars: [
          "Vicki Lawrence",
          "Leslie Nielsen",
          "Jo Anne Worley"
        ]
      },
      {
        name: "Menace, Anyone?",
        season: 2,
        episode: 20,
        synopsis: "Tennis star scandal",
        culturallyInsensitive: false,
        guestStars: [
          "Bryan Cranston",
          "Linda Hamilton",
          "David Spielberg"
        ]
      },
      {
        name: "Magnum on Ice ",
        season: 3,
        episode: 8,
        synopsis: "Magnum PI crossover",
        culturallyInsensitive: false,
        guestStars: [
          "John McMartin",
          "Tom Selleck",
          "Jessica Walter"
        ]
      },
      {
        name: "Curse of the Daanav",
        season: 4,
        episode: 14,
        synopsis: "Cursed Indian ruby",
        culturallyInsensitive: true,
        guestStars: [
          "Jane Badler",
          "Kabir Bedi",
          "Larry Linville"
        ]
      }
    ]
  }

  //Problem 1
//Return an array of episodes that are culturallyInsensitive
const insensitive = murder.topFiveEpisodes.filter(show => show.culturallyInsensitive === true)
console.log(insensitive)

//Problem 2
//Return the episode that includes Magnum PI
const magnum = murder.topFiveEpisodes.filter(show => show.guestStars.includes('Tom Selleck'))
console.log(magnum)

//Problem 3
//Return an array of all stars in the top five episodes array
const allStars = murder.topFiveEpisodes.reduce((acc, show) => {
    if(!acc.includes(show.guesStars)){
      acc.push(show.guestStars)
    } else{
      acc.push(show.guestStars)
    }
    return acc.flat()
  }, [])
  console.log(allStars)

  //Level 2

//Problem 1
// Return an array of objects with just the name and the guest stars for each episode
//e.g. [{name: "My Johnny Lies Over the Ocean",
  //guestStars: [
    //   "Vicki Lawrence",
    //   "Leslie Nielsen",
    //   "Jo Anne Worley"
    // ]}, 
    // {name: "Menace, Anyone?",
    // guestStars: [
    //     "Bryan Cranston",
    //     "Linda Hamilton",
    //     "David Spielberg"
    //   ]}...
    // ]

const guestObj = murder.topFiveEpisodes.reduce((acc, show) => {
    let obj = {}
    if(!obj["name"]) {
      obj["name"] = show.name
    } 
    if(!obj['guestStars']){
      obj['guestStars'] = show.guestStars
    }
    acc.push(obj)
    return acc
  }, [])
  console.log(guestObj)