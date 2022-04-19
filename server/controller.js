const photos = require('./fakeDatabase.json')
let globalId = 3

module.exports = {

    getList: (req, res) => {
        res.status(200).send(photos)
    },

    addPhoto: (req, res) => {
        let { imageURL, caption, tag } = req.body
        let newPhotoCard = {
            id: globalId,
            imageURL,
            caption, 
            tag
        }
        photos.push(newPhotoCard)
        res.status(200).send(photos)
        globalId++
    },
    
    deletePhoto: (req, res) => {
        let index = photos.findIndex(photo => photo.id === +req.params.id)
        photos.splice(index, 1)
        res.status(200).send(photos)
    },

    // editCaption: (req, res) => {
    //     // let { newCaption } = req.body
    // }
    
    
}