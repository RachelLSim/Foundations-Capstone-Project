const cardField = document.getElementById('cardField')
const form = document.querySelector('#input')
const headerForm = document.querySelector('#headerForm')
// let headerUpdated = document.querySelector('header')

const photosCallback = ({ data: photos }) => {
    displayPhotos(photos)}

////////ENDPOINTS/axios calls/////////
const getAllPhotoCards = () => axios.get('http://localhost:5502/api/photos').then(photosCallback).catch(err => console.log(err))
const createPhoto = body => axios.post('http://localhost:5502/api/photos', body).then(photosCallback).catch(err => console.log(err))
const deletePhoto = id => axios.delete(`http://localhost:5502/api/photos/${id}`).then(photosCallback).catch(err => console.log(err))

// const changeHeader = body => axios.put('http://localhost:5502/api/header/', body).then(photosCallback).catch(err => console.log(err))


/////////submitHandlers//////////////

// function headerSubHandler(e) {
//     e.preventDefault()
//     let headerURL = document.querySelector('#headerInput')

//     let thisObj = {
//         headerURL: headerURL.value
//     }

//     changeHeader(thisObj)

//     headerURL.value = ''
// }

function submitHandler(e) {
    e.preventDefault()
    let imageURL = document.querySelector('#addPhoto')
    let caption = document.querySelector('#addCaption')
    
    
    let bodyObj = {
        imageURL: imageURL.value,
        caption: caption.value
    }
    
    createPhoto(bodyObj)
    
    imageURL.value = ''
    caption.value = ''

}

///////////other functions////////////////
function createPhotoCard(photo) {
    const photoCard = document.createElement('div')
    photoCard.classList.add('photo-card')

    photoCard.innerHTML = 
    `
    <section class='photoCard'>
    
    <button id="deleteButton" onclick='deletePhoto(${photo.id})'>x</button>
        <img alt='photo display' src=${photo.imageURL} class='photo-display'/>
        <p class='photo-caption'>${photo.caption}</p>
        </section>
        `
        // <button id='editCaption' onclick='editCaption(${photo.caption})'>edit caption</button)

    cardField.appendChild(photoCard)
}

function displayPhotos(arr) {
    cardField.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPhotoCard(arr[i])
    }
}

//////////EventListeners/////////////////
// headerForm.addEventListener('submit', headerSubHandler)
form.addEventListener('submit', submitHandler)


getAllPhotoCards()