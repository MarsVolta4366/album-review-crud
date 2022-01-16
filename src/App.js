import './App.css'
import AlbumsGallery from './components/AlbumsGallery'
import NewAlbum from './components/NewAlbum'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Albums</Link>
              </li>
              <li>
                <Link to="/newAlbum">New Album</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<AlbumsGallery />} />
          <Route path="/newAlbum" element={<NewAlbum />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
