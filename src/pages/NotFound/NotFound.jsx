/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/background-g97927a64a_1920.jpg'

const NotFound = () => {
    return (
        <div className='m-5 d-flex align-items-center justify-content-center'>
           <div>
            <img src={img} alt="" />
           <h1 className='fs-1 fw-bold'>404</h1>
            <h1 className='fs-2 fw-semibold '> Page Not Found</h1>
           </div>

            <div className=' text-center justify-content-center mt-5'>
                <Link to={'/'}><button className='btn btn-secondary'>Back Home</button></Link>

            </div>
        </div>
    );
};

export default NotFound;