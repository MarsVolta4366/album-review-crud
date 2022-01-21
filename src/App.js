import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
// COMPONENTS
import AlbumsGallery from './components/AlbumsGallery'
import NewAlbum from './components/NewAlbum'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'

function App() {

  let [data, setData] = useState()

  useEffect(() => {
    fetch("http://localhost:5000/albums")
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [])

  const renderGallery = () => {
    if (data) {
      return (
        <AlbumsGallery data={data} />
      )
    }
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
            <Route path="/newAlbum" element={<NewAlbum />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
