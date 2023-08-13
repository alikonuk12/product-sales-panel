import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import classes from './index.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store';

const ProductCard = ({ id, image, name, price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => navigate(`/product/${id}`);

  const handleClickButton = () => {
    dispatch(addToCart({ id, name, price }));
  }

  return (
    <Card classes={{ root: classes.container }}>
      {image &&
        <CardMedia
          sx={{ height: 100 }}
          image={image}
        />}
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {price}₺
        </Typography>
        <Typography variant="body1" color="text.secondary" className={classes.name} onClick={handleClick}>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.button}>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            size="small"
            onClick={handleClickButton}
          >
            Add To Cart
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

export default ProductCard;