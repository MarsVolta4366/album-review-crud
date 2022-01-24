import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function AlbumShow() {

    const { albumIdParams } = useParams()
    // Album state variables
    let [name, setName] = useState("")
    let [artist, setArtist] = useState("")
    let [releaseYear, setReleaseYear] = useState()
    // Review state variables
    let [author, setAuthor] = useState("")
    let [stars, setStars] = useState(0)
    let [content, setContent] = useState("")
    let [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/albums/${albumIdParams}`)
            .then(resData => {
                setName(resData.data.name)
                setArtist(resData.data.artist)
                setReleaseYear(resData.data.releaseYear)
                setReviews(resData.data.reviews)
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        const review = {
            author: author,
            stars: stars,
            content: content,
            album: albumIdParams
        }
        axios.post("http://localhost:5000/reviews/add", review)
        window.location = `/showAlbum/${albumIdParams}`
    }

    let reviewsDisplay = (
        <p>No reviews yet</p>
    )
    if (reviews.length > 0) {
        reviewsDisplay = reviews.map((rev, index) => {
            return (
                <div key={index}>
                    <hr />
                    <p>Author: {rev.author}</p>
                    <p>Stars: {rev.stars}</p>
                    <p>Content: {rev.content}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Artist: {artist}</p>
            <p>Release Year: {releaseYear}</p>

            <h2>Write a Review</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author Name" onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Stars</Form.Label>
                    <Form.Control type="number" placeholder="Stars" onChange={(e) => setStars(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" aria-label="With textarea" onChange={(e) => setContent(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
                    Submit
                </Button>
            </Form>

            <h2>Reviews</h2>
            {reviewsDisplay}
        </div>
    )
}