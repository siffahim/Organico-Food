import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/courses/${courseId}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    const handleCheckout = () => {
        navigate('/checkout')
    }
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <div className='border'>
                        <img width='100%' src={course.img} alt="" />
                    </div>
                </Col>
                <Col sm={6}>
                    <h2>{course.name}</h2>
                    <h2>{course.writer}</h2>
                    <h2>${course.price}.99</h2>
                    <Rating
                        initialRating={course.review}
                        emptySymbol="fa fa-star-o icon"
                        fullSymbol="fa fa-star icon "
                        readonly
                    /><br />
                    <button className='custom-btn mt-2' onClick={handleCheckout}>Check Out</button>
                </Col>
                <Col>
                    <p> Educatin is breath of people
                        Education can be a convenient means of displaying contents that includes various types of objects be it the title, image, buttons, icons or more. Designed to be flexible to your contents, the blocks or cards can include any type of custom elements. It can be anything from business cards, informative cards to even analytics cards but the main point here is that adding a card on any site will instantly add that innovative and creative touch. And like we have discussed before on our previous articles, there is certainly no denying that cards can be beneficial in more than one way.Whether you own a blog, professional company site, or anything for that matter, cards can be a great implementation on any niche.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetail;