const path = require('path')
const express = require('express')
const app = express()

app.listen(3000, () => console.log('Server listening on port 3000.'))

app.use(express.static(path.join(__dirname, 'app', 'public')))
app.use(express.json())
app.use(express.urlencoded({  extended: true }))


app.get('/', (req, res) => {
  res.redirect('/home.html')
})

app.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'public', 'survey.html'))
})