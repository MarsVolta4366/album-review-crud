import './App.css'
import AlbumsGallery from './components/AlbumsGallery'
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
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<AlbumsGallery />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
