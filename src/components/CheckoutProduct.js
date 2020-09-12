import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [_ , dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id
    });
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {
            Array(rating)
              .fill()
              .map((_) => (
                <p>&#11088;</p>
              ))
          }
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  )
}

export default CheckoutProduct;