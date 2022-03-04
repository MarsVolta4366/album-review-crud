import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { Pencil, Trash } from "react-bootstrap-icons"

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
        const fetchData = async () => {
            const response = await fetch(`https://album-review-crud-backend.herokuapp.com/albums/${albumIdParams}`)
            const resData = await response.json()
            setName(resData.name)
            setArtist(resData.artist)
            setReleaseYear(resData.releaseYear)
            setReviews(resData.reviews)
        }
        fetchData()
    }, [albumIdParams])

    const submitReview = async (e) => {
        e.preventDefault()
        const review = {
            author: author,
            stars: stars,
            content: content,
            album: albumIdParams
        }
        await fetch("https://album-review-crud-backend.herokuapp.com/reviews/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        window.location = `/showAlbum/${albumIdParams}`
    }

    let reviewsDisplay = (
        <p>No reviews yet!</p>
    )

    if (reviews.length > 0) {
        reviewsDisplay = reviews.map((rev, index) => {
            let starsDisplay = ""
            for (let i = 0; i < rev.stars; i++) {
                starsDisplay += "⭐️"
            }
            return (
                <div key={index} style={{ width: "70%", textAlign: "left", margin: "0 auto", borderTop: "1px solid lightgray", padding: "10px" }}>
                    <i className="bi bi-person-circle" style={{ fontSize: "20px" }}></i>
                    <span style={{ margin: "10px" }}>{rev.author}</span>
                    <p>{starsDisplay}</p>
                    <p>{rev.content}</p>
                </div>
            )
        })
    }

    return (
        <div id="albumShowPageContainer">
            <h1>{name}</h1>
            <p className="mySubtitle">{artist} &bull; {releaseYear}</p>
            <Link to={`/editAlbum/${albumIdParams}`}>
                <Pencil className="myIcon" />
            </Link>
            <Link to="/" onClick={() => props.deleteAlbum(albumIdParams)}>
                <Trash className="myIcon" />
            </Link>
            <div style={{ margin: "50px 0 50px 0" }}>
                <h2>Write a Review</h2>
                <Form className="albumForm">
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
                    <input type="submit" value="Submit" className="myButton" onClick={(e) => submitReview(e)} />
                </Form>
            </div>
            <h2>Reviews</h2>
            {reviewsDisplay}
        </div>
    )
}