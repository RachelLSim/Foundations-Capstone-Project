const express = require('express')
const cors = require('cors')
const listCtrl = require('./server/controller')

const app = express()

//create some top-level MIDDLEWARE: every request goes through it
app.use(express.json())
app.use(cors())


app.post('/api/photos', listCtrl.addPhotoCard)
//app.delete('/api/photos')


const PORT = process.env.PORT || 4025

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})