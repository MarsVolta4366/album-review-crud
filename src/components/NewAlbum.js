const NewAlbum = () => {
    return (
        <main>
        <h1>Add a New Album</h1>
        <form method="POST" action="/albums">
            <div>
                <label htmlFor="name">Album Name: </label>
                <input type="text" name="name" id="name" required />
            </div>
            <div>
                <label htmlFor="artist">Artist: </label>
                <input type="text" name="artist" id="artist" required />
            </div>
            <div>
                <label htmlFor="releaseYear">Release Year: </label>
                <input type="text" name="releaseYear" id="releaseYear" />
            </div>
            <input type="submit" value="Add Album" />
        </form>
    </main>
    )
}

export default NewAlbum