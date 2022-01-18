import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
// COMPONENTS
import AlbumsGallery from './components/AlbumsGallery'
import NewAlbum from './components/NewAlbum'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route exact path="/" element={<AlbumsGallery />} />
          <Route path="/newAlbum" element={<NewAlbum />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
