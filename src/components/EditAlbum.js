import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

const EditAlbum = (props) => {

    const { albumIdParams } = useParams()
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
        axios.put(`http://localhost:5000/albums/${albumIdParams}`, album)
        window.location = `/showAlbum/${albumIdParams}`
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/albums/${albumIdParams}`)
            .then(resData => {
                setName(resData.data.name)
                setArtist(resData.data.artist)
                setReleaseYear(resData.data.releaseYear)
            })
    }, [])

    return (
        <div>
            <h1>Edit Album</h1>
            <form style={props.formStyle}>
                <div className="form-group">
                    <label htmlFor="name">Album Name: </label>
                    <input type="text" name="name" id="name" required className="form-control" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="artist">Artist: </label>
                    <input type="text" name="artist" id="artist" required className="form-control" defaultValue={artist} onChange={(e) => setArtist(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="releaseYear">Release Year: </label>
                    <input type="text" name="releaseYear" id="releaseYear" className="form-control" defaultValue={releaseYear} onChange={(e) => setReleaseYear(Number(e.target.value))} />
                </div>
                <input type="submit" value="Submit Changes" className="btn btn-primary" onClick={(e) => onSubmit(e)} />
            </form>
        </div>
    )
}

export default EditAlbum