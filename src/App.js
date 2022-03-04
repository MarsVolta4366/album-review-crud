import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'

// COMPONENTS
import AlbumsGallery from './components/AlbumsGallery'
import NewAlbum from './components/NewAlbum'
import Navbar from './components/Navbar'
import EditAlbum from './components/EditAlbum'
import AlbumShow from './components/AlbumShow'

function App() {

  // FIX
  // When you add multiple comments, a white bar appears at bottom of screen
  // Style reviews display

  let [data, setData] = useState([])

  const formStyle = {
    width: "70%",
    margin: "0 auto"
  }

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch("https://album-review-crud-backend.herokuapp.com/albums")
      const resData = await response.json()
      setData(resData)
    }
    fetchAlbums()
  }, [])

  const deleteAlbum = async (albumId) => {
    await fetch(`https://album-review-crud-backend.herokuapp.com/albums/${albumId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    window.location = "/"
  }

  return (
    <div className="App">
      <Router>
        <div className="myContainer">
          <Navbar />
          <Routes>
            <Route exact path="/" element={
              <AlbumsGallery data={data} deleteAlbum={deleteAlbum} />
            } />
            <Route path="/newAlbum" element={
              <NewAlbum />
            } />
            <Route path="/editAlbum/:albumIdParams" element={
              <EditAlbum />
            } />
            <Route path="/showAlbum/:albumIdParams" element={
              <AlbumShow deleteAlbum={deleteAlbum} formStyle={formStyle} />
            } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
