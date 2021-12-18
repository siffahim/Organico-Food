import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import img from '../../../images/Screenshot 2021-12-18 180004.png';

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <img width='50%' src={logo} alt="" />
                            <p className='mt-2'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                            <ul className='d-flex m-0 p-0'>
                                <li className='footer-icon'><i class="fab fa-instagram"></i></li>
                                <li className='footer-icon'><i class="fab fa-twitter"></i></li>
                                <li className='footer-icon'><i class="fas fa-globe"></i></li>
                                <li className='footer-icon'><i class="fab fa-whatsapp"></i></li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>Links</h4>
                            <ul>
                                <li><i class="fas fa-carrot"></i> Home</li>
                                <li><i class="fas fa-carrot"></i> Service</li>
                                <li><i class="fas fa-carrot"></i> About us</li>
                                <li><i class="fas fa-carrot"></i> Testimonials</li>
                                <li><i class="fas fa-carrot"></i> News</li>
                                <li><i class="fas fa-carrot"></i> FQA</li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>Official info:</h4>
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i> 30 Commercial Road
                                    Fratton, Australia</li>
                                <li><i class="fas fa-phone-alt"></i> 1-888-452-1505</li>
                                <h6>Open Hours:</h6>
                                <li>Mon – Sat: 8 am – 5 pm,
                                    Sunday: Close</li>
                            </ul>
                        </Col>
                        <Col sm={3}>
                            <h4>Instagram</h4>
                            <img width='100%' src={img} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='text-center py-2 bg-dark text-white'>
                <p>&copy; 2021 with organio,All right reserved</p>
            </div>
        </>
    );
};

export default Footer;