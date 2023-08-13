import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { Order, ProductCard, BrandFilter, ModelFilter } from '../../components';
import classes from './index.module.scss';

const Home = () => {
    const { products, search, brandFilters, modelFilters, sortKey } = useSelector(state => state);
    const [page, setPage] = useState(0);

    const LIMIT = 12;
    const pageCount = Math.ceil(products?.length / LIMIT);

    const handleChangePagination = (_, value) => setPage(value - 1);

    const sortByCreatedAt = (a, b) => {
        if (Date.parse(a.createdAt) > Date.parse(b.createdAt)) return 1;
        else if (Date.parse(b.createdAt) > Date.parse(a.createdAt)) return -1;
        return 0;
    }

    const sortByPrice = (a, b) => {
        if (Number(a.price) > Number(b.price)) return 1;
        else if (Number(b.price) > Number(a.price)) return -1;
        return 0;
    }

    return (
        <div className={classes.container}>
            <div className={classes.filterAndOrderContainer}>
                <Order />
                <BrandFilter />
                <ModelFilter />
            </div>
            <div className={classes.listContainer}>
                <div className={classes.list}>
                    {products
                        .filter(product => !!search.length ? product.name.toLowerCase().startsWith(search) : product)
                        .filter(product => !!Object.keys(brandFilters).length && Object.values(brandFilters).includes(true) ? brandFilters[product.brand] : product)
                        .filter(product => !!Object.keys(modelFilters).length && Object.values(modelFilters).includes(true) ? modelFilters[product.model] : product)
                        .sort((a, b) =>
                            sortKey === 'old_to_new' ? sortByCreatedAt(b, a) :
                                sortKey === 'new_to_old' ? sortByCreatedAt(a, b) :
                                    sortKey === 'price_high_to_low' ? sortByPrice(b, a) :
                                        sortKey === 'price_low_to_high' && sortByPrice(a, b))
                        .slice(page * LIMIT, (page + 1) * LIMIT)
                        .map(({ id, image, name, price }) =>
                            <ProductCard
                                id={id}
                                image={image}
                                name={name}
                                price={price}
                            />
                        )
                    }
                </div>
                {products.length > LIMIT &&
                    <Pagination
                        count={pageCount}
                        variant="outlined"
                        shape="rounded"
                        color="primary"
                        onChange={handleChangePagination}
                    />}
            </div>
        </div>
    );
}

export default Home;