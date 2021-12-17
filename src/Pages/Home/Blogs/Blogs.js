import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img2 from '../../../images/check-out.png';
import img1 from '../../../images/food.png';
import img4 from '../../../images/free-delivery.png';
import img3 from '../../../images/location.png';

const blogs = [
    {
        id: 1,
        count: '1900',
        name: 'Select Product',
        img: img1
    },
    {
        id: 2,
        count: '1900',
        name: 'Add To Cart',
        img: img2
    },
    {
        id: 3,
        count: '1900',
        name: 'Check Out',
        img: img3
    },
    {
        id: 4,
        count: '1900',
        name: 'Waiting to Delivery',
        img: img4
    }
]

const Blogs = () => {
    return (
        <Container>
            <Row>
                {
                    blogs.map(blog => <Col sm={3} key={blog.id}>
                        <div className="blog-card">
                            <img width='60px' src={blog.img} alt="" />
                            <h6 className='ms-3 mt-3'>{blog.name}</h6>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Blogs;