import axios from "axios"
import { useState } from "react"

const NewAlbum = (props) => {

    let [name, setName] = useState("")
    let [artist, setArtist] = useState("")
    let [releaseYear, setReleaseYear] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        const album = {
            name: name,
            artist: artist,
            releaseYear: releaseYear
        }
        axios.post("http://localhost:5000/albums/add", album)
        window.location = "/"
    }

    return (
        <div>
            <h1>Add a New Album</h1>
            <form id="newAlbumForm" style={props.formStyle}>
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
                    <input type="text" name="releaseYear" id="releaseYear" className="form-control" onChange={(e) => setReleaseYear(Number(e.target.value))} />
                </div>
                <input type="submit" value="Add Album" className="btn btn-primary" onClick={(e) => onSubmit(e)} />
            </form>
        </div>
    )
}

export default NewAlbum