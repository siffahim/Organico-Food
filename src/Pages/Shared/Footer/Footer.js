import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/footer-map-img-1.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Container>
                <Row>
                    <Col sm={3}>
                        <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
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
                            <li>Home</li>
                            <li>Service</li>
                            <li>About us</li>
                            <li>Testimonials</li>
                            <li>News</li>
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
                                Sunday: CLOSED</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <img src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;