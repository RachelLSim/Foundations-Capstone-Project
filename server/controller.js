const photos = require('./db.json')
let globalId = 3

module.exports = {

    getList: (req, res) => {
        if(req.query.sortByTag === 'true'){ 
            photos.sort(function(a,b) {
                return a.tag.localeCompare(b.tag);
            })
            
            res.status(200).send(photos)
        }
        if(req.query.sortByCaption === 'true'){ 
            photos.sort(function(a,b) {
                return a.caption.localeCompare(b.caption);
            })
            
            res.status(200).send(photos)
        }
        else{
            res.status(200).send(photos)
        }
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
    
}