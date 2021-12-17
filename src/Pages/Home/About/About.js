import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img2 from '../../../images/deliver.png';
import img3 from '../../../images/fast-delivery.png';
import img4 from '../../../images/food-service.png';
import img from '../../../images/h4-banner1.jpg';
import img1 from '../../../images/money.png';

const About = () => {
    return (
        <div className='about'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col sm={6}>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='about-icon'>
                                <img width='50px' src={img1} alt="" />
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='about-icon'>
                                <img width='50px' src={img2} alt="" />
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='about-icon'>
                                <img width='50px' src={img3} alt="" />
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='about-icon'>
                                <img width='50px' src={img4} alt="" />
                            </div>
                            <div>
                                <h6>100% Payment Secure</h6>
                                <p>Dolor sit amet, consectetur adipiscing elit, sed eiusmod temporincididunt ut labore et.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <img width='80%' className='about-img' src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;