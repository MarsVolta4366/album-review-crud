import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditAlbum = (props) => {

    const { albumIdParams } = useParams()
    let [name, setName] = useState("")
    let [artist, setArtist] = useState("")
    let [releaseYear, setReleaseYear] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://album-review-crud-backend.herokuapp.com/albums/${albumIdParams}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const resData = await response.json()
            setName(resData.name)
            setArtist(resData.artist)
            setReleaseYear(resData.releaseYear)
        }
        fetchData()
    }, [albumIdParams])

    const submitEdit = async (e) => {
        e.preventDefault()
        const album = {
            name: name,
            artist: artist,
            releaseYear: releaseYear
        }
        await fetch(`https://album-review-crud-backend.herokuapp.com/albums/${albumIdParams}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(album)
        })
        window.location = `/showAlbum/${albumIdParams}`
    }

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
                <input type="submit" value="Submit Changes" className="btn btn-primary" onClick={(e) => submitEdit(e)} />
            </form>
        </div>
    )
}

export default EditAlbum