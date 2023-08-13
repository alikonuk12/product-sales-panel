import React from 'react';
import { Button } from '@mui/material';
import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import classes from './index.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store';

const Counter = ({ item }) => {
    const dispatch = useDispatch();

    const handleClickAdd = () => {
        dispatch(addToCart({ id: item[0].id, name: item[0].name, price: item[0].price }));
    }

    const handleClickRemove = () => {
        dispatch(removeFromCart(item[0].id));
    }

    return (
        <div className={classes.container}>
            <div>
                <div className={classes.name}>{item[0].name}</div>
                <div className={classes.price}>{item[0].price}₺</div>
            </div>
            <div className={classes.amountContainer}>
                <Button 
                    className={classes.button} 
                    onClick={handleClickRemove}
                >
                    <RemoveOutlined htmlColor='#626B8B' fontSize='small' />
                </Button>
                <div className={classes.amount}>{item.length}</div>
                <Button 
                    className={classes.button} 
                    onClick={handleClickAdd}
                >
                    <AddOutlined htmlColor='#626B8B' fontSize='small' />
                </Button>
            </div>
        </div>
    );

}

export default Counter;