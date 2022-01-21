const AlbumsGallery = (props) => {

    let albums = props.data
    
    if(albums) {
        albums = props.data.map((album, index) => {
            return (
                <li key={index}>{album.name}</li>
            )
        })
    } else {
        albums = "No albums found"
    }

    return (
        <div>
            <h1>Albums Gallery</h1>
            <ul>
                {albums}
            </ul>
        </div>
    )
}

export default AlbumsGallery