const express = require('express')
const cors = require('cors')
const { getList, addPhoto } = require('./controller.js')

const app = express()

//create some top-level MIDDLEWARE: every request goes through it
app.use(express.json())
app.use(cors())


app.get('/api/photos', getList)
app.post('/api/photos', addPhoto)
//app.delete('/api/photos')


const PORT = 5502

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})