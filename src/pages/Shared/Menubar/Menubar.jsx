/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Menubar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <Container>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div>Food House</div>
                    <Nav className="mx-auto">

                        <Link to='/info/0'  className={({ isActive }) => (isActive ? '--bs-info' : '')}>Home</Link>

                        <NavLink href="/about "  className={({ isActive }) => (isActive ? '--bs-info' : '')}>Blogs </NavLink>
                        
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
    );
};

export default Menubar;