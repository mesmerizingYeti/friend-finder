const { getFriends, addFriend, bestFriend } = require('../controllers/friendsControllers')

module.exports = function (app) {

  app.get('/api/friends', (req, res) => {
    res.json(getFriends())
  })

  app.post('/api/friends', (req, res) => {
    const bf = bestFriend(req.body)
    addFriend(req.body)
    res.json(bf)
  })

}