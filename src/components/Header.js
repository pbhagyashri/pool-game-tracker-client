import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        
        <header className="header-container">

            <h1 className="header-container__title">Pool Game Tracker</h1>

            <nav className="header-container__navigation">
                <Link to="/login" className="header-container__links">Login</Link>
                <Link to="/signup" className="header-container__links">Signup</Link>
                <Link to="/" className="header-container__links">Home</Link>
                <Link to="/login" className="header-container__links">Profile</Link>
            </nav>
        </header>
    
    )
}


export default Header;