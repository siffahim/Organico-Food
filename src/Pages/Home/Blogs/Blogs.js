import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const blogs = [
    {
        id: 1,
        count: '1900',
        name: 'Video Tutorials',
        img: 'https://10minuteschool.com/assets/landing-page/video.svg'
    },
    {
        id: 2,
        count: '1900',
        name: 'Video Tutorials',
        img: 'https://10minuteschool.com/assets/landing-page/quiz.svg'
    },
    {
        id: 3,
        count: '1900',
        name: 'Video Tutorials',
        img: 'https://10minuteschool.com/assets/landing-page/smartbook.svg'
    },
    {
        id: 4,
        count: '1900',
        name: 'Video Tutorials',
        img: 'https://10minuteschool.com/assets/landing-page/blog.svg'
    },
]

const Blogs = () => {
    return (
        <Container>
            <Row>
                {
                    blogs.map(blog => <Col sm={3}>
                        <div className="blog-card"
                            key={blog.id}
                        >
                            <img src={blog.img} alt="" />
                            <div className='blgo-content'>
                                <h3>{blog.count}+</h3>
                                <p>{blog.name}</p>
                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Blogs;