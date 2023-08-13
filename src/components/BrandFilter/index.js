import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { filterByBrand } from '../../store';
import { SearchInput } from '../';
import classes from './index.module.scss';

const BrandFilter = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    
    const [brands, setBrands] = useState([]);
    const [search, setSearch] = useState('');

    const handleChangeSearch = ({ target }) => setSearch(target.value);

    const handleChangeCheckbox = (e, brand) => {
        dispatch(filterByBrand({ brand, selected: e.target.checked }))
    }

    useEffect(() => {
        let list = [];
        products
            .filter(product => !!search.length ? product.brand.toLowerCase().startsWith(search) : product)
            .forEach(product => !list.includes(product.brand) && list.push(product.brand));

        setBrands(list);
    }, [products, search]);

    return (
        <div className={classes.container}>
            <Typography color='#626B8B' variant='subtitle1'>Brands</Typography>
            <div className={classes.subContainer}>
                <SearchInput value={search} onChange={handleChangeSearch} />
                <FormGroup>
                    <div className={classes.list}>
                        {brands.map(brand => <FormControlLabel onChange={(e) => handleChangeCheckbox(e, brand)} control={<Checkbox />} label={brand} />)}
                    </div>
                </FormGroup>
            </div>
        </div>
    );
}

export default BrandFilter;