import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img6 from '../../../images/business.jpg';
import img1 from '../../../images/design.jpg';
import img2 from '../../../images/development.jpg';
import img3 from '../../../images/marketing.jpg';
import img7 from '../../../images/music.jpg';
import img5 from '../../../images/personal-development.jpg';
import img8 from '../../../images/photograpy.jpg';
import img4 from '../../../images/software.jpg';

const Course = () => {
    return (
        <div>
            <Row className='gy-2 px-3'>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img1} alt="" />
                        <h6>Design</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img2} alt="" />
                        <h6>Development</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img3} alt="" />
                        <h6>Markting</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img4} alt="" />
                        <h6>IT & Sowftware</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img5} alt="" />
                        <h6>Personam Development</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img6} alt="" />
                        <h6>Business</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img7} alt="" />
                        <h6>Photograpy</h6>
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        <img width='100%' src={img8} alt="" />
                        <h6>Music</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Course;