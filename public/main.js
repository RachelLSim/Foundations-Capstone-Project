//functions I may not need:
// const addPhotoCard = (url) => {
//     axios.post('http://localhost:4025/api/image', photoCard).then(res => res.data.forEach(elem => createItem(elem)))
// }
// const { default: axios } = require("axios")

const cardField = document.querySelector('cardField')
const form = document.querySelector('input')


const photosCallback = ({ data: photos }) => displayPhotos(photos)
const errorCallback = err => console.log(err.response.data)

//ENDPOINTS/axios calls
const getAllPhotoCards = axios.get('http://localhost4024/api/photos').then(photosCallback).catch(errorCallback)
const createPhotoCard = body => axios.post('http://localhost4024/api/photos').then(photosCallback).catch(errorCallback)



function submitHandler(e) {
    e.preventDefault()
    
    let imageUrl = document.querySelector('addPhoto')
    let caption = document.querySelector('addCaption')
    
    let photoCard = {
    url: imageUrl.value,
    caption: caption.value
    }
    
    createPhotoCard(photoCard)

    imageUrl.value = ''
    caption = ''

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