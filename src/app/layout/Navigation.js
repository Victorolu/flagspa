import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchBar from '../components/SearchBar'

const Navigation = ({handleOnTextChange, isDarkTheme}) => {
    return (
        <header className={`header sticky-top ${isDarkTheme ? "": "bg-light"}`}>
            <Navbar expand="lg">
                <Navbar.Brand>
                    <h2><span><FontAwesomeIcon icon={['far', 'flag']} /></span>  Know Your Countries</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navigation" />
                <Navbar.Collapse id="navigation">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to='/countriesbyflag'>By Flag</NavLink>
                        <NavLink className="nav-link" to='/countriesbyname'>By Name</NavLink>
                    </Nav>
                    <SearchBar handleOnTextChange={handleOnTextChange}/>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Navigation