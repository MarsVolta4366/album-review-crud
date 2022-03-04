import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg p-2 fixed-top" style={{backgroundColor: "black"}}>
            <Link to="/" className="navbar-brand">Album Tracker</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link myLink">Albums</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/newAlbum" className="nav-link myLink">New Album</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar