import React from 'react';

const Gallery = () => {
    return (
        <div className='gallery-container px-4'>
            <div>
                <h1 style={{ color: '#464343' }}>Build your organic store with <span style={{ color: '#62a403' }}>Organio</span><br /> Purchase now. <span style={{ color: '#f95800' }}>Only $59!</span></h1>
                <button className='btn-gallery'>Purchase Now</button>
            </div>
        </div>
    );
};

export default Gallery;