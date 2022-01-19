const NewAlbum = () => {
    return (
        <div>
            <h1>Add a New Album</h1>
            <form method="POST" action="/albums">
                <div className="form-group">
                    <label htmlFor="name">Album Name: </label>
                    <input type="text" name="name" id="name" required className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="artist">Artist: </label>
                    <input type="text" name="artist" id="artist" required className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="releaseYear">Release Year: </label>
                    <input type="text" name="releaseYear" id="releaseYear" className="form-control" />
                </div>
                <input type="submit" value="Add Album" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default NewAlbum