const { friends: { getFriends, addFriend, bestFriend }} = require('../controllers')

module.exports = function (app) {

  // Get all friends
  app.get('/api/friends', (req, res) => {
    res.json(getFriends())
  })

  // Add a friend
  app.post('/api/friends', (req, res) => {
    // Find bf before adding to database
    bestFriend(req.body)
      .then(bf => {
        // Add to database
        addFriend(req.body)
        // Return person with best compatibility
        res.json(bf)
      })
      .catch(e => console.log(e))
  })

}