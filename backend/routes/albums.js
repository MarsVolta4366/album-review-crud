const router = require("express").Router()
let Album = require("../models/album.model")

router.route("/").get((req, res) => {
    Album.find()
        .then(albums => res.json(albums))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
    const name = req.body.name
    const artist = req.body.artist
    const releaseYear = Number(req.body.releaseYear)

    const newAlbum = new Album({
        name,
        artist,
        releaseYear
    })

    newAlbum.save()
        .then(() => res.json("Album added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router