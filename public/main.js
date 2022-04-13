const cardField = document.querySelector('cardField')
const imageUrl = document.getElementById('addPhoto')
const caption = document.getElementById('addCaption')
const form = document.getElementById('input')


// const baseURL = `http://localhost:4024/api/capstone`

const errCallback = err => console.log(err.response.data)

console.log(caption)

const addImage = (url) => {
    axios.post('http://localhost:4025/api/image', {item: url}).then(res => res.data.forEach(elem => createItem(elem)))
}

const addCaption = (cap) => {
    axios.post('http://localhost:4025/api/caption', {item: cap}).then(res => res.data.forEach(elem => createItem(elem)))
}

const createItem = (obj) => {
    let item = document.createElement('span')
    let todo = document.createElement('p')
    let x = document.createElement('button')
    x.textContent = 'X'
    x.id = obj.id
    todo.textContent = obj.item
    item.appendChild(todo)
    item.appendChild(x)
    list.appendChild(item)

    x.addEventListener('click', (e) => {
        axios.delete(`http://localhost:4040/api/list/${e.target.id}`)
        .then(res => res.data.forEach(elem => createItem(elem)))
        clearList()
    })
}

//addEventListener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(caption.value)
    // console.log(imageUrl.value)
    addImage(imageUrl.value) 
    addCaption(caption.value)
    imageUrl.value = ""
    caption.value = ""
})