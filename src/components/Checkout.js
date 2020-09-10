import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';


const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/Auto-clearance-sale_1500x250_71.png"
          alt="checkout banner"
        />
        <div className="checkout__title">
          <h1>Your Shopping Basket</h1>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;