// const { default: axios } = require("axios")
const cardField = document.getElementById('cardField')
const form = document.querySelector('#input')

const photosCallback = ({ data: photos }) => {
    console.log(photos)
    displayPhotos(photos)}

//ENDPOINTS/axios calls
const getAllPhotoCards = () => axios.get('http://localhost:5502/api/photos').then(photosCallback).catch(err => console.log(err))
const createPhoto = body => axios.post('http://localhost:5502/api/photos', body).then(photosCallback).catch(err => console.log(err))



function submitHandler(e) {
    e.preventDefault()
    let imageURL = document.querySelector('#addPhoto')
    let caption = document.querySelector('#addCaption')
    
    
    let bodyObj = {
        imageURL: imageURL.value,
        caption: caption.value
    }
    console.log(bodyObj)
    createPhoto(bodyObj)
    console.log('hello')

    imageURL.value = ''
    caption = ''

}

function createPhotoCard(photo) {
    // console.log(photo)
    const photoCard = document.createElement('div')
    // photoCard.id = 'photoCard'
    photoCard.classList.add('photo-card')

    photoCard.innerHTML = 
    `
    <section class='photoCard'>
    <button class="deleteButton">x</button>
        <img alt='photo display' src=${photo.imageURL} class='photo-display'/>
        <p class='photo-caption'>${photo.caption}</p>
    </section>
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