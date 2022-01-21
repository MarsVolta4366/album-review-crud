import { useParams } from 'react-router-dom'

const EditAlbum = () => {
    const { albumIdParams } = useParams()

    return (
        <div>{albumIdParams}</div>
    )
}

export default EditAlbum