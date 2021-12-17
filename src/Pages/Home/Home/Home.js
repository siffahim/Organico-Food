import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Courses from '../Courses/Courses';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Blogs />
            <Courses />
            <About />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;