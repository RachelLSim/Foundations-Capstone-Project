//functions I may not need:
// const baseURL = `http://localhost:4024/api/capstone`
// const imageUrl = document.getElementById('addPhoto')
// const caption = document.getElementById('addCaption')

const cardField = document.querySelector('cardField')
const form = document.getElementById('input')

// const photosCallback = ({ data: photos }) => 
const errorCallback = err => console.log(err.response.data)

const getAllPhotoCards = axios.get('http://localhost4024/api/photos').then(photosCallback).catch(errorCallback)

let photoCard = {
    url: imageUrl.value,
    caption: caption.value
}
console.log(photoCard)


const addPhotoCard = (url) => {
    axios.post('http://localhost:4025/api/image', photoCard).then(res => res.data.forEach(elem => createItem(elem)))
}


// const createItem = (obj) => {
//     let item = document.createElement('span')
//     let todo = document.createElement('p')
//     let x = document.createElement('button')
//     x.textContent = 'X'
//     x.id = obj.id
//     todo.textContent = obj.item
//     item.appendChild(todo)
//     item.appendChild(x)
//     list.appendChild(item)

//     x.addEventListener('click', (e) => {
//         axios.delete(`http://localhost:4040/api/list/${e.target.id}`)
//         .then(res => res.data.forEach(elem => createItem(elem)))
//         clearList()
//     })
// }

//addEventListener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addPhotoCard(photoCard)
    imageUrl.value = ""
    caption.value = ""
})