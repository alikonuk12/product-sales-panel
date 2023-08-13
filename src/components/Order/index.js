import React from 'react';
import { useDispatch } from 'react-redux';
import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { sortProducts } from '../../store';
import classes from './index.module.scss';

const Order = () => {
    const dispatch = useDispatch();
    
    const handleClickRadio = ({ target }) => {
        dispatch(sortProducts(target.value));
    }

    return (
        <div className={classes.container}>
            <Typography color='#626B8B' variant='subtitle1'>Sort By</Typography>
            <div className={classes.subContainer}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="old_to_new"
                >
                    <FormControlLabel value="old_to_new" control={<Radio value="old_to_new" onChange={handleClickRadio} />} label="Old to New" />
                    <FormControlLabel value="new_to_old" control={<Radio value="new_to_old" onChange={handleClickRadio} />} label="New to Old" />
                    <FormControlLabel value="price_higth_to_low" control={<Radio value="price_higth_to_low" onChange={handleClickRadio} />} label="Price High to Low" />
                    <FormControlLabel value="price_low_to_high" control={<Radio value="price_low_to_high" onChange={handleClickRadio} />} label="Price Low to High" />
                </RadioGroup>
            </div>
        </div>
    );

}

export default Order;