import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav className="navbar navbar-expand-lg navbar-expand-xl navbar-expand-xxl navbar-expand-sm navbar-expand-md">
                <div className='navbar-icon-container'>
                    <p className='navbar-icon'>S</p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="navbar-container collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className='nav-list navbar-nav ms-auto'>
                        <li >
                            <Link to='#About'><a className="nav-link" href="#">About</a></Link>
                        </li>
                        <li >
                            <Link to="#Skills"><a className="nav-link" href="#">Skills</a></Link>
                        </li>
                        <li >
                            <Link to="#Projects"><a className="nav-link" href="#">Projects</a></Link>
                        </li>
                        <li >
                            <Link to="#Contact"><a className="nav-link" href="#">Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;