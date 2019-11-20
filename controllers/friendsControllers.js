let { friendsArray: friends } = require('../data')

module.exports = {

  // Get all people
  getFriends () {
    return friends
  },

  // Add a new person
  addFriend (person) {
    friends.push(person)
  },

  // Given a new person,
  // find the first person in the database with the best compatibility
  async bestFriend (person) {
    let response = await new Promise((resolve, reject) => {
      computeCompatibilities(person)
        .then(compatibilities => mostCompatible(compatibilities))
        .then(bf => resolve(bf))
        .catch(e => reject(e))
    })

    return response
  }

}


// Given a new person,
// find their compatibility with each person in the database
async function computeCompatibilities ({ scores: newScores }) {
  let response = await new Promise((resolve, reject) => {
    const comps = friends.map(friend => 
      friend.scores.reduce((difference, score, index) => 
        difference + Math.abs(score - newScores[index])))
    resolve(comps)
  })

  return response
}

// Given a list of compatibilities, 
// find the first index of the best compatibility
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