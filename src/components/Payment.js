import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { db } from '../firebase';

const Payment = () => {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket]);

  // console.log('Secret Key>>>>>>>', user.uid);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      console.log( paymentIntent);
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setProcessing(false);
      setError(null);
      setSucceeded(true);
      dispatch({
        type: 'EMPTY_BASKET'
      })
      history.replace('/orders')
    })
  }

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">
              {basket?.length} Items
            </Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>React Training center</p>
            <p>TamilNadu, India</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(({ id, title, price, image, rating }) => (
              <CheckoutProduct key={id} id={id} title={title} price={price} image={image} rating={rating} />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                <CurrencyFormat
                  value={getBasketTotal(basket)}
                  decimalScale={2}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                  renderText={value => (
                    <h3>Order Total: {value}</h3>
                  )} />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? 'Processing': 'Buy Now'}</span>
                </button>
                </div>
                {error && <div>{error}</div>}
              </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Payment;