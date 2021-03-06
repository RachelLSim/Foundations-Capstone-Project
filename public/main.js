const cardField = document.getElementById('cardField')
const form = document.querySelector('#input')
const header = document.querySelector('header')
const headerForm = document.querySelector('#headerForm')
const sortTags = document.querySelector('#sortTags')
const sortCaptions = document.querySelector('#sortCaptions')

 
const photosCallback = ({ data: photos }) => {
    displayPhotos(photos)}

const getAllPhotoCards = () => axios.get('http://localhost:5502/api/photos').then(photosCallback).catch(err => console.log(err))
const createPhoto = body => axios.post('http://localhost:5502/api/photos', body).then(photosCallback).catch(err => console.log(err))
const deletePhoto = id => axios.delete(`http://localhost:5502/api/photos/${id}`).then(photosCallback).catch(err => console.log(err))
const sortPhotoTags = () => axios.get('http://localhost:5502/api/photos?sortByTag=true').then(photosCallback).catch(err => console.log(err))
const sortPhotoCaptions = () => axios.get('http://localhost:5502/api/photos?sortByCaption=true').then(photosCallback).catch(err => console.log(err))


function submitHandler(e) {
    e.preventDefault()
    let imageURL = document.querySelector('#addPhoto')
    let caption = document.querySelector('#addCaption')
    let tag = document.querySelector('#tag')
    
    
    let bodyObj = {
        imageURL: imageURL.value,
        caption: caption.value,
        tag: tag.value
    }
    
    createPhoto(bodyObj)
    
    imageURL.value = ''
    caption.value = ''
    tag.value = ''

}

function headerSubHandler(e) {
    e.preventDefault()
    let headerURL = document.querySelector('#headerInput')
    
    header.style.backgroundImage = `url(${headerURL.value})`
    headerURL.value = ''
}

function sortTagHandler(e) {
    e.preventDefault()
    console.log('sort clicked!')
    sortPhotoTags()
}

function sortCaptionHandler(e) {
    e.preventDefault()
    console.log('caption sort clicked!')
    sortPhotoCaptions()
}


function createPhotoCard(photo) {
    const photoCard = document.createElement('div')
    photoCard.classList.add('photo-card')

    photoCard.innerHTML = 
    `
    <section class='photoCard'>
        <button id="deleteButton" onclick='deletePhoto(${photo.id})'>x</button>
        <img alt='photo display' src=${photo.imageURL} class='photo-display'/>
        <p class='photo-caption'>${photo.caption}</p>
        <p class='photo-tag'>tags: ${photo.tag}</p>
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


headerForm.addEventListener('submit', headerSubHandler)
form.addEventListener('submit', submitHandler)
sortTags.addEventListener('click', sortTagHandler)
sortCaptions.addEventListener('click', sortCaptionHandler)


getAllPhotoCards()