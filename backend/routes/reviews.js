const router = require("express").Router()
let Review = require("../models/review.model")

router.route("/").get((req, res) => {
    Review.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
    const author = req.body.author
    const content = req.body.content

    const newReview = new Review({
        author, 
        content
    })

    newReview.save()
        .then(() => res.json("Review added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router