const express = require('express')
const cors = require('cors')
const { getList, addPhoto, deletePhoto } = require('./controller.js')

const app = express()


app.use(express.json())
app.use(cors())


app.get('/api/photos', getList)
app.post('/api/photos', addPhoto)
app.delete('/api/photos/:id', deletePhoto)




const PORT = 5502

app.listen(PORT, () => { console.log(`Listening on ${PORT}`)})