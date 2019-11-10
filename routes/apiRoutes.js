const { getFriends, addFriend, bestFriend } = require('../controllers/friendsControllers')

module.exports = function (app) {

  app.get('/api/friends', (req, res) => {
    res.json(getFriends())
  })

  app.post('/api/friends', (req, res) => {
    bestFriend(req.body)
      .then(bf => {
        addFriend(req.body)
        res.json(bf)
      })
      .catch(e => console.log(e))
  })

}