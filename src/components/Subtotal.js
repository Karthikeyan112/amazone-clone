import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const calculateTotal = () => {
    return basket.reduce((sum, item) => sum + item.price , 0);
  }

  console.log(calculateTotal())
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={calculateTotal()}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
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

      <button>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal;