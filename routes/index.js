module.exports = app => {
  require('./apiRoutes')(app)
  require('./htmlRoutes')(app)
}