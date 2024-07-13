import React from 'react';
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import TransitionPage from '../Other/TransitionPage';

const Layout = () => {
    return (
        <>
            <TransitionPage >
                <Navbar />
                <Outlet />
                <Footer />
            </TransitionPage>
        </>
    );
}

export default Layout;