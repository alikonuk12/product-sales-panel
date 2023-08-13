import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Cart } from '../';
import classes from './index.module.scss';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className={classes.main}>                
                <Outlet />
                <Cart />
            </main>
        </div>
    );
}

export default Layout;