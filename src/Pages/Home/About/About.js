import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img3 from '../../../images/exam.svg';
import img2 from '../../../images/learning.svg';
import img from '../../../images/teacher.svg';

const About = () => {
    return (
        <div className='about'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col sm={6}>
                        <h2>About More</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum inventore ex quam aperiam, aspernatur fugiat et magni nobis neque autem voluptatibus at eius ipsam. Ex ipsa labore quasi, dolor repudiandae suscipit molestiae vitae autem earum iure animi eum at facilis totam dolorem architecto voluptate ducimus vero esse mollitia soluta! Consequatur.</p>
                        <button className='custom-btn'>Learn More</button>
                    </Col>
                    <Col sm={6}>
                        <img width='80%' className='about-img' src={img} alt="" />
                    </Col>
                    <Col sm={6}>
                        <img width='80%' className='about-img' src={img2} alt="" />
                    </Col>
                    <Col sm={6}>
                        <h2>About More</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum inventore ex quam aperiam, aspernatur fugiat et magni nobis neque autem voluptatibus at eius ipsam. Ex ipsa labore quasi, dolor repudiandae suscipit molestiae vitae autem earum iure animi eum at facilis totam dolorem architecto voluptate ducimus vero esse mollitia soluta! Consequatur.</p>
                        <button className='custom-btn'>Learn More</button>
                    </Col>
                    <Col sm={6}>
                        <h2>About More</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum inventore ex quam aperiam, aspernatur fugiat et magni nobis neque autem voluptatibus at eius ipsam. Ex ipsa labore quasi, dolor repudiandae suscipit molestiae vitae autem earum iure animi eum at facilis totam dolorem architecto voluptate ducimus vero esse mollitia soluta! Consequatur.</p>
                        <button className='custom-btn'>Learn More</button>
                    </Col>
                    <Col sm={6}>
                        <img width='80%' className='about-img' src={img3} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;