import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export default function AlbumShow(props) {

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
        axios.get(`https://album-review-crud-backend.herokuapp.com/albums/${albumIdParams}`)
            .then(resData => {
                setName(resData.data.name)
                setArtist(resData.data.artist)
                setReleaseYear(resData.data.releaseYear)
                setReviews(resData.data.reviews)
            })
    }, [albumIdParams])

    const onSubmit = (e) => {
        e.preventDefault()
        const review = {
            author: author,
            stars: stars,
            content: content,
            album: albumIdParams
        }
        axios.post("https://album-review-crud-backend.herokuapp.com/reviews/add", review)
        window.location = `/showAlbum/${albumIdParams}`
    }

    let reviewsDisplay = (
        <p>No reviews yet</p>
    )
    if (reviews.length > 0) {
        reviewsDisplay = reviews.map((rev, index) => {
            let starsDisplay = ""
            for (let i = 0; i < rev.stars; i++) {
                starsDisplay += "⭐️"
            }
            return (
                <div key={index} style={{ width: "70%", margin: "0 auto", borderTop: "1px solid lightgray", padding: "10px" }}>
                    <i className="bi bi-person-circle" style={{ fontSize: "20px" }}></i>
                    <span style={{ margin: "10px" }}>{rev.author}</span>
                    <p>{starsDisplay}</p>
                    <p>{rev.content}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>Artist: {artist}</p>
            <p>Release Year: {releaseYear}</p>

            <Link to={`/editAlbum/${albumIdParams}`} className="btn btn-primary">Edit</Link>
            <Link to="/" className="btn btn-danger" onClick={() => props.deleteAlbum(albumIdParams)}>Delete</Link>

            <div style={{ margin: "50px 0 50px 0" }}>
                <h2>Write a Review</h2>
                <Form style={props.formStyle}>
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
            </div>
            <h2>Reviews</h2>
            {reviewsDisplay}
        </div>
    )
}