const photos = require('./fakeDatabase.json')
let globalId = 3

module.exports = {

    getList: (req, res) => {
        res.status(200).send(images, captions)
    },

    addPhoto: (req, res) => {
        let { url, caption } = req.body
        let newPhotoCard = {
            id: globalId,
            url,
            caption
        }
        photos.push(newPhotoCard)
        id++
        res.status(200).send(photos)
    },

    // addcaption: (req, res) => {
    //     let item = {
    //         id: id,
    //         item: req.body.item
    //     }
    //     captions.push(item)
    //     id++
    //     res.status(200).send(list)
    }

    // deleteItem: (req, res) => {
    //     const { id } = req.params
    //     let indexToDelete = null

    //     list.forEach((item, index) => {
    //         if(item.id === +id){
    //             indexToDelete = index
    //             return
    //         }
    //     })
    //     list.splice(indexToDelete, 1)
    //     res.status(200).send(list)
    // }


}