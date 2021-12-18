import React from 'react';
import Discount from '../../Discount/Discount';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Courses from '../Courses/Courses';
import Gallery from '../Gallery/Gallery';
import ProductFacility from '../ProductFacility/ProductFacility';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='my-4'>
                <Blogs />
            </div>
            <Courses />
            <div className='my-5'>
                <ProductFacility />
            </div>
            <Discount />
            <About />
            <Gallery />
        </div>
    );
};

export default Home;