import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import { Counter } from '../';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart } from '../../store';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [reducedCart, setReducedCart] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);
    const [total, setTotal] = useState(0);

    const handleClickCheckout = () => {
        localStorage.setItem('checkout', JSON.stringify(cart));
        dispatch(cleanCart());
    }

    useEffect(() => {
        if (Array.isArray(cart)) {
            const reduced = cart.reduce((accumulator, currentValue) => {
                accumulator[currentValue.id] = accumulator[currentValue.id] ?? [];
                accumulator[currentValue.id].push(currentValue);
                return accumulator;
            }, {});

            setReducedCart(Object.values(reduced));
        }

        if (isInitialized) localStorage.setItem('cart', JSON.stringify(cart));
        setIsInitialized(true);
    }, [cart]);

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
        <div className={classes.container}>
            <div className={classes.subContainer}>
                {reducedCart.map((item) => <Counter item={item} />)}
            </div>
            <div className={classes.subContainer}>
                <div className={classes.priceContainer}>
                    <Typography variant='subtitle1'>Total Price:</Typography>
                    <Typography variant='subtitle1' className={classes.price}>{total}₺</Typography>
                </div>
                <Button variant='contained' size='small' onClick={handleClickCheckout}>Checkout</Button>
            </div>
        </div>
    );
}

export default Cart;