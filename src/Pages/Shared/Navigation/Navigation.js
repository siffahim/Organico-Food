import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-3">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ms-auto text-center">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    {
                        user.email && <Nav.Link href="#a" className='text-warning'>{user.displayName}</Nav.Link>
                    }
                    {
                        user.email ? <button onClick={logOut}>Logout</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;