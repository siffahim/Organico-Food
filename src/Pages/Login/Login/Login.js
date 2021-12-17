import React, { useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/google.png';
import img from '../../../images/img-login.svg';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { login, googleLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[name] = value;
        setLoginData(newLoginData)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginData.email, loginData.password, navigate, location)
    }
    return (
        <Container className='login-container py-5 mt-4'>
            <Row className='d-flex align-items-center'>
                <Col sm={12} md={6}>
                    <img width='80%' src={img} alt="" />
                </Col>
                <Col sm={12} md={4}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl
                                placeholder="Email"
                                type='email'
                                name='email'
                                onBlur={handleOnBlur}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl
                                placeholder="Password"
                                type='password'
                                name='password'
                                onBlur={handleOnBlur}
                            />
                        </InputGroup>
                        <button>Login</button>
                    </form>
                    <div >
                        <button className='icon-content' onClick={() => googleLogin(navigate, location)} >
                            <img style={{ width: '25px' }} src={logo} alt="" />
                            <span className='login-text text-muted ms-4'>Continue with Google</span>
                        </button>
                        <p className='mt-2'><small>Don't have an account? <Link to='/register'>Create an account</Link></small></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;