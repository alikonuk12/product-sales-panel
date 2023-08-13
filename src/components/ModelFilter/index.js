import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { filterByModel } from '../../store';
import { SearchInput } from '../';
import classes from './index.module.scss';

const ModelFilter = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    
    const [models, setModels] = useState([]);
    const [search, setSearch] = useState('');

    const handleChangeSearch = ({ target }) => setSearch(target.value);

    const handleChangeCheckbox = (e, model) => {
        dispatch(filterByModel({ model, selected: e.target.checked }))
    }

    useEffect(() => {
        let list = [];
        products
            .filter(product => !!search.length ? product.model.toLowerCase().startsWith(search) : product)
            .forEach(product => !list.includes(product.model) && list.push(product.model));

        setModels(list);
    }, [products, search]);

    return (
        <div className={classes.container}>
            <Typography color='#626B8B' variant='subtitle1'>Model</Typography>
            <div className={classes.subContainer}>
                <SearchInput value={search} onChange={handleChangeSearch} />
                <FormGroup>
                    <div className={classes.list}>
                        {models.map(model => <FormControlLabel onChange={(e) => handleChangeCheckbox(e, model)} control={<Checkbox />} label={model} />)}
                    </div>
                </FormGroup>
            </div>
        </div>
    );
}

export default ModelFilter;