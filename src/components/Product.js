import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider';

const Product = ({ id, title, price, rating, image }) => {
  const [ { basket }, dispatch ] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image
      },
    });
  };
  console.log("this is a basket", basket);
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))
          }
        </div>
      </div>
      <img className="product__img" src={image} alt="" />
      <button onClick={addToBasket}>ADD TO BASKET</button>
    </div>
  )
}

export default Product;