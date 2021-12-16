import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/footer-map-img-1.png';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Container>
                <Row>
                    <Col sm={3}>
                        <ul>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <ul>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <ul>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
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