import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const AlbumsGallery = (props) => {

    let albums = props.data.map((album, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="myCard">
                <Link to={`/showAlbum/${album.id}`} style={{ color: "white", textDecoration: "none" }}>
                    <Card.Body>
                        <Card.Title>{album.name}</Card.Title>
                        <Card.Subtitle className="mb-2 mySubtitle">{album.artist}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 mySubtitle">Released {album.releaseYear}</Card.Subtitle>
                    </Card.Body>
                </Link>
            </Card>
        )
    })

    return (
        <div>
            <h1>Albums</h1>
            <div className="albumsContainer">
                {albums}
            </div>
        </div>
    )
}

export default AlbumsGallery