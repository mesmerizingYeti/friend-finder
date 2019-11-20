module.exports = function (app) {

  // Main page
  app.get('/', (req, res) => {
    res.redirect('/home.html')
  })
  
  // Survey page
  app.get('/survey', (req, res) => {
    res.redirect('/survey.html')
  })

}