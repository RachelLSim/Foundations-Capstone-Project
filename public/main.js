// const { default: axios } = require("axios")
const cardField = document.getElementById('cardField')
const form = document.querySelector('input')

const photosCallback = ({ data: photos }) => {
    console.log(photos)
    displayPhotos(photos)}

//ENDPOINTS/axios calls
const getAllPhotoCards = () => axios.get('http://localhost:5502/api/photos').then(photosCallback).catch(err => console.log(err))
const createPhoto = body => axios.post('http://localhost:5502/api/photos').then(photosCallback).catch(err => console.log(err))



function submitHandler(e) {
    e.preventDefault()
    
    let imageUrl = document.querySelector('addPhoto')
    let caption = document.querySelector('addCaption')
    
    let photoCard = {
    url: imageUrl.value,
    caption: caption.value
    }
    
    createPhoto(photoCard)

    imageUrl.value = ''
    caption = ''

}

function createPhotoCard(photo) {
    console.log(photo)
    const photoCard = document.createElement('div')
    photoCard.id = 'photoCard'
    photoCard.classList.add('photo-card')

    photoCard.innerHTML = 
    `
    
    <img alt='photo display' src=${photo.imageURL} class='photo-display'/>
    <p class='photo-caption'>${photo.caption}</p>
    `

    cardField.appendChild(photoCard)
}

function displayPhotos(arr) {
    cardField.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPhotoCard(arr[i])
    }
}

//addEventListener
form.addEventListener('submit', submitHandler)

getAllPhotoCards()