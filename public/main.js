const cardField = document.querySelector('cardField')
const imageUrl = document.getElementById('addPhoto')
const caption = document.getElementById('addCaption')
const form = document.getElementById('input')


const baseURL = `http://localhost:4024/api/capstone`

const errCallback = err => console.log(err.response.data)

console.log(caption)
