import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { addToCart } from '../../store';
import classes from './index.module.scss';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [product, setProduct] = useState(undefined);


    const handleClickButton = () => {
        dispatch(addToCart({ id: product.id, name: product.name, price: product.price }));
    }

    useEffect(() => {
        const product = products.find(product => product.id === id);
        setProduct(product);
    }, [products]);

    return (
        <Card classes={{ root: classes.container }}>
            {product?.image &&
                <CardMedia
                    component="img"
                    classes={{ root: classes.img }}
                    image={product?.image}
                />}
            <CardContent>
                <div className={classes.content}>
                    <div>
                        <Typography component="div" variant="h5">
                            {product?.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {product?.price}₺
                        </Typography>
                    </div>
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        size="small"
                        onClick={handleClickButton}
                    >
                        Add To Cart
                    </Button>
                    <Typography variant="body2" color="text.secondary">
                        {product?.description}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductDetail;