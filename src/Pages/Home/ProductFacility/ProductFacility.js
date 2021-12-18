import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/152-ai.png';

const ProductFacility = () => {
    return (
        <Container>
            <div>
                <h2>Product Facility</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consequuntur.</p>
            </div>
            <Row>
                <Col sm={4}>
                    <div className='d-flex align-items-center justify-content-center my-3'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-seedling"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Eat healthy food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center my-4'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-cookie-bite"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Sweet Exoit food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center my-4'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-mug-hot"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Sweet Exoit food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center my-4'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-carrot"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Sweet Exoit food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                </Col>
                <Col sm={4}>
                    <img width='100%' src={img} alt="" />
                </Col>
                <Col sm={4}>
                    <div className='d-flex align-items-center justify-content-center my-3'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Sweet Exoit food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center my-4'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-stopwatch"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Sweet Exoit food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center my-3'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-map-marked-alt"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Sweet Exoit food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center my-3'>
                        <div className='faciliti-icon'>
                            <i class="fas fa-university"></i>
                        </div>
                        <div style={{ lineHeight: '10px' }}>
                            <h6>Sweet Exoit food</h6>
                            <p>Dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductFacility;