import { Link } from "react-router-dom"

const AlbumsGallery = (props) => {

    let albums = props.data

    albums = props.data.map((album, index) => {
        return (
            <div className="card" key={index}>
                <div className="card-body">
                    <Link to={`/showAlbum/${album.id}`}>
                        <h5 className="card-title">Album: {album.name}</h5>
                    </Link>
                    <p className="card-text">Artist: {album.artist}</p>
                    <p className="card-text">Release Year: {album.releaseYear}</p>
                    <Link to={`/editAlbum/${album.id}`} className="btn btn-primary">Edit</Link>
                    <Link to="/" className="btn btn-danger" onClick={() => props.deleteAlbum(album.id)}>Delete</Link>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Albums</h1>
            <ul>
                {albums}
            </ul>
        </div>
    )
}

export default AlbumsGallery