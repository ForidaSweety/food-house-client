/* eslint-disable no-unused-vars */
import React from 'react';
import Menubar from '../pages/Shared/Menubar/Menubar';
import { Outlet } from 'react-router-dom';

const ServiceLayout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default ServiceLayout;