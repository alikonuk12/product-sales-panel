import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HomeOutlined, WorkOutline } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { searchProduct } from '../../store';
import { SearchInput } from '../';
import classes from './index.module.scss';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [total, setTotal] = useState(0);

    const handleChangeSearch = (e) => dispatch(searchProduct(e.target.value));

    const handleClickHome = () => navigate('/');

    useEffect(() => {
        if (Array.isArray(cart)) {
            const totalPrice = cart.reduce((accumulator, currentValue) => {
                accumulator += Number(currentValue.price);
                return accumulator;
            }, 0);

            setTotal(totalPrice);
        }
    }, [cart]);


    return (
        <header className={classes.container}>
            <div className={classes.subContainer}>
                <Button onClick={handleClickHome}>
                    <HomeOutlined htmlColor='#FFFFFF' fontSize='large' />
                </Button>
                <SearchInput onChange={handleChangeSearch} />
            </div>
            <div className={classes.subContainer}>
                <WorkOutline htmlColor='#FFFFFF' fontSize='large' />
                <Typography color='#FFFFFF' variant='subtitle1'>{total}₺</Typography>
            </div>
        </header>
    );
}

export default Header;