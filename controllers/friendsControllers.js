let friends = require('../data/friends')

module.exports = {

  getFriends () {
    return friends
  },

  addFriend (person) {
    friends.push(friends)
  },

  async bestFriend (person) {
    let response = await new Promise((resolve, reject) => {
      computeCompatibilities(person)
        .then(compatibilities => {
          console.log(compatibilities)
          mostCompatible(compatibilities)
          .then(bf => {
            resolve(bf)
          })
          .catch(e => reject(e))
        })
        .catch(e => reject(e))
    })

    return response
  }

}

async function computeCompatibilities ({ scores: newScores }) {
  console.log(newScores)
  let response = await new Promise((resolve, reject) => {
    const comps = friends.map(friend => 
      friend.scores.reduce((difference, score, index) => 
        difference + Math.abs(score - newScores[index])))
    resolve(comps)
  })

  return response
}

async function mostCompatible (compatibilities) {
  let response = await new Promise((resolve, reject) => {
    let bestIndex = 0,
        bestComp = 41
    compatibilities.forEach((comp, i) => {
      if (comp < bestComp) {
        bestComp = comp
        bestIndex = i
      }
    })
    resolve(friends[bestIndex])
  })

  return response
}