const photos = require('./fakeDatabase.json')
let globalId = 3

module.exports = {

    getList: (req, res) => {
        res.status(200).send(photos)
        console.log("list")
    },

    addPhoto: (req, res) => {
        let { imageURL, caption } = req.body
        let newPhotoCard = {
            id: globalId,
            imageURL,
            caption
        }
        photos.push(newPhotoCard)
        res.status(200).send(photos)
        globalId++
    },
    
    deletePhoto: (req, res) => {
        console.log('deletingStuff')
        let index = photos.findIndex(photo => photo.id === +req.params.id)
        photos.splice(index, 1)
        res.status(200).send(photos)
    },

    // changeHeader: (req, res) => {
    //     let { headerURL } = req.body

    //     headerURL.replace('')
    // }
    
    
}