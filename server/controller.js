const photos = require('./fakeDatabase.json')
let globalId = 3

module.exports = {

    getList: (req, res) => {
        res.status(200).send(photos)
        console.log("list")
    },

    addPhoto: (req, res) => {
        console.log('goodbye')
        let { imageURL, caption } = req.body
        let newPhotoCard = {
            id: globalId,
            imageURL,
            caption
        }
        photos.push(newPhotoCard)
        res.status(200).send(photos)
        globalId++
    }
    
    // deletePhoto: (req, res) => {
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