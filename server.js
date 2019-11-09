const path = require('path')
const express = require('express')
const app = express()

app.listen(3000, () => console.log('Server listening on port 3000.'))

app.use(express.static(path.join(__dirname, 'app', 'public')))
app.use(express.json())
app.use(express.urlencoded({  extended: true }))

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)