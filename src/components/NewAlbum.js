import { useState } from "react"

const NewAlbum = () => {

    let [name, setName] = useState("")
    let [artist, setArtist] = useState("")
    let [releaseYear, setReleaseYear] = useState()

    const submitAlbum = async (e) => {
        e.preventDefault()
        const album = {
            name: name,
            artist: artist,
            releaseYear: releaseYear
        }
        await fetch("https://album-review-crud-backend.herokuapp.com/albums/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(album)
        })
        window.location = "/"
    }

    return (
        <div>
            <h1>Add a New Album</h1>
            <form className="albumForm" onSubmit={(e) => submitAlbum(e)}>
                <div className="form-group">
                    <label htmlFor="name">Album Name: </label>
                    <input type="text" name="name" id="name" required className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="artist">Artist: </label>
                    <input type="text" name="artist" id="artist" required className="form-control" onChange={(e) => setArtist(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="releaseYear">Release Year: </label>
                    <input type="text" name="releaseYear" id="releaseYear" required className="form-control" onChange={(e) => setReleaseYear(Number(e.target.value))} />
                </div>
                <input type="submit" value="Add Album" className="myButton" />
            </form>
        </div>
    )
}

export default NewAlbum