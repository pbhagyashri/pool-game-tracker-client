import React from 'react'
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        
        <header className="header-container">
            <Row>
                <Col m={4} s={12}>
                    <h1 className="header-container__title" r={6}>Pool Game Tracker</h1>
                </Col>

                <Col m={8} s={12}>
                    <nav className="header-container__navigation" r={6}>
                        <Link to="/login" className="header-container__links">Login</Link>
                        <Link to="/signup" className="header-container__links">Signup</Link>
                        <Link to="/" className="header-container__links">Leaderboard</Link>
                        <Link to="/login" className="header-container__links">Profile</Link>
                        <Link to="/games/new" className="header-container__links">Start a Game</Link>
                    </nav>
                </Col>    
            </Row>
        </header>
    
    )
}


export default Header;