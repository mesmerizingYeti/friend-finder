const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({  extended: true }))

require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

app.listen(3000, () => console.log('Server listening on port 3000.'))