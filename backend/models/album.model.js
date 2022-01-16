const mongoose = require("mongoose")

const albumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    releaseYear: Number
})

module.exports = mongoose.model("Album", albumSchema)