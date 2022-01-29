import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import axios from "axios"

// COMPONENTS
import AlbumsGallery from './components/AlbumsGallery'
import NewAlbum from './components/NewAlbum'
import Navbar from './components/Navbar'
import EditAlbum from './components/EditAlbum'
import AlbumShow from './components/AlbumShow'

function App() {

  let [data, setData] = useState()

  const formStyle = {
    width: "70%",
    margin: "0 auto"
  }

  useEffect(() => {
    fetch("https://album-review-crud-backend.herokuapp.com/albums")
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [])

  const renderGallery = () => {
    if (data) {
      return (
        <AlbumsGallery data={data} deleteAlbum={deleteAlbum} />
      )
    }
  }

  const deleteAlbum = (albumId) => {
    axios.delete(`https://album-review-crud-backend.herokuapp.com/albums/${albumId}`)
      .then(() => window.location = "/")

  }

  const renderEditAlbum = () => {
    return (
      <EditAlbum formStyle={formStyle} />
    )
  }

  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Routes>
            <Route exact path="/" element={
              renderGallery()
            } />
            <Route path="/newAlbum" element={<NewAlbum formStyle={formStyle} />} />
            <Route path="/editAlbum/:albumIdParams" element={
              renderEditAlbum()
            } />
            <Route path="/showAlbum/:albumIdParams" element={<AlbumShow deleteAlbum={deleteAlbum} formStyle={formStyle} />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
