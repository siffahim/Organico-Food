import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CoursesCard from './CoursesCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const run = async () => {
            const res = await fetch('http://localhost:5000/courses')
            const data = await res.json()
            setCourses(data)
        }
        run()
    }, [])
    return (
        <div className='px-4'>
            <Row className='gy-3'>
                {
                    courses.map(course => <CoursesCard
                        key={course._id}
                        course={course}
                    />)
                }
            </Row>
        </div>
    );
};

export default Courses;