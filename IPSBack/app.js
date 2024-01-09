require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))
app.use('/api',require('./routes'))
app.listen(port);
module.exports = app