import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';

const CoursesCard = ({ course }) => {
    const { img, price, name, review, writer, _id } = course;
    const navigate = useNavigate();

    const handleToBuy = id => {
        navigate(`/courses/${id}`)
    }
    return (
        <Col sm={3}>
            <div className='card'>
                <img src={img} alt="" />
                <div className='course-content'>
                    <h5>{name}</h5>
                    <p>{writer}</p>
                    <Rating
                        initialRating={review}
                        emptySymbol="fa fa-star-o icon"
                        fullSymbol="fa fa-star icon"
                        readonly
                    />
                    <h5>${price}.99</h5>
                    <p>Bestseller</p>
                </div>
                <button className='custom-btn' onClick={() => handleToBuy(_id)}>Add To Cart</button>
            </div>
        </Col>
    );
};

export default CoursesCard;