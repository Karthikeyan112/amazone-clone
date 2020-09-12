import React from 'react';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css';

const Order = ({ order }) => {
  console.log(order)
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket.map(({ id, title, price, image, rating }) => (
        <CheckoutProduct
          key={id}
          id={id}
          title={title}
          price={price}
          image={image}
          rating={rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        value={order.data.amount / 100}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
        renderText={value => (
          <h3 className="order__total">Order Total: {value}</h3>
        )} />
    </div>
  )
}

export default Order;