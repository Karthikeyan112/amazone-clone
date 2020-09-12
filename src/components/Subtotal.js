import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../reducer';

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  

  console.log(getBasketTotal(basket))
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
        renderText={value => (
          <>
            <p className="subtotal__total">
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )} />

      <button onClick={() => history.push('/payment')}>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal;