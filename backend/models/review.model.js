const mongoose = require("mongoose")

let reviewSchema = new mongoose.Schema({
    author: {type: String, default: "Anonymous"},
    content: {type: String, default: ""}
})

module.exports = mongoose.model("Review", reviewSchema)