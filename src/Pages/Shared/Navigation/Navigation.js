import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="px-3 text-white header">
            <Navbar.Brand href="#home">
                <img width='110px' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ms-auto text-center d-flex align-items-center">
                    <Nav.Link as={Link} className='header-link' to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} className='header-link' to="/dashboard">Dashboard</Nav.Link>
                    {
                        user.email && <Nav.Link href="#a" className='text-white fw-bold'>{user.displayName}</Nav.Link>
                    }
                    {
                        user.email && <img style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                    }
                    {
                        user.email ? <button onClick={logOut} className='custom-btn'><i class="fas fa-sign-out-alt"></i> Logout</button> : <Nav.Link as={Link} className='custom-btn' to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;