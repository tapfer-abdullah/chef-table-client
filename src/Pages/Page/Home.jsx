/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../SharePages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../SharePages/Footer';
import useTitle from '../../useTitle';

const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Header></Header>
            <Outlet className='min-h-[100vh]'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;