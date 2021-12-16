import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from "../../../images/studying.svg";

const Banner = () => {
    return (
        <div className='px-5 banner-bg'>
            <Row className='d-flex align-items-center py-5'>
                <Col sm={6}>
                    <div>
                        <p>A better learning future starts here</p>
                        <h2 className='fw-bold mb-4'>EASY <br />SOLUTIONS <br /><span className='custom-title'>STUDY AT HOME</span></h2>
                        <p className='mb-4'>Developing caring learners who are actively growing and achieving. Educating all students to achieve today and tomorrow in a global community and economy. Educating for human greatness.</p>
                        <button className='custom-btn'>Get Started</button>
                    </div>
                </Col>
                <Col sm={6}>
                    <img width='100%' src={img} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Banner;