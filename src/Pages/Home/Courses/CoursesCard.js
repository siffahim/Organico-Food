import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CoursesCard = ({ course }) => {
    const { img, price, name, _id } = course;
    const navigate = useNavigate();

    const handleToBuy = id => {
        navigate(`/courses/${id}`)
    }
    return (
        <Col sm={3}>
            <div className='food-card'>
                <div className='food-info'>
                    <img width='100%' src={img} alt="" />
                </div>
                <div className='food-btn-container'>
                    <div className='food-btn' onClick={() => handleToBuy(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width='20px' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div className='food-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width='20px' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <div className='food-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width='20px' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                    </div>
                </div>
                <div className='food-content'>
                    <p className='icon2'>{name}</p>
                    <h6 style={{ color: '#62a403' }}>${price}.99</h6>
                </div>
            </div>
        </Col>
    );
};

export default CoursesCard;