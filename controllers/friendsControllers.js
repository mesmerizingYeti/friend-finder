let friends = require('../data/friends')

module.exports = {

  getFriends () {
    return friends
  },

  addFriend (person) {
    friends.push(friends)
  },

  bestFriend (person) {
    const comps = computeComps(person)
    return mostCompatible(comps)
  },

  computeComps ({ scores: newScores }) {
    return friends.map(friend => {
      friend.scores.reduce((difference, score, index) => difference + Math.abs(score - newScores[i]))
    })
  },

  mostCompatible (comps) {
    let bestIndex = 0,
        bestComp = comps[0]
    for (let i = 1; i < comps.length; i++) {
      if (comp < bestComp) {
        bestComp = comp
        bestIndex = i
      }
    }

    return friends[i]
  }

}