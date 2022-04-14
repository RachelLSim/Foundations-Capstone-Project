const express = require('express')
const cors = require('cors')
const listCtrl = require('./server/controller')

const app = express()

//create some top-level MIDDLEWARE: every request goes through it
app.use(express.json())
app.use(cors())


app.post('/api/image', listCtrl.addImage)
app.post('/api/caption', listCtrl.addCaption)


const PORT = process.env.PORT || 4025

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})