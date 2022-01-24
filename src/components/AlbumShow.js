import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"

export default function AlbumShow() {

    const { albumIdParams } = useParams()
    let [name, setName] = useState("")
    let [artist, setArtist] = useState("")
    let [releaseYear, setReleaseYear] = useState()

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
            <h1>{name}</h1>
            <p>Artist: {artist}</p>
            <p>Release Year: {releaseYear}</p>

            {/* Bootstrap add review form, first redo so this project uses react bootstrap */}
        </div>
    )
}