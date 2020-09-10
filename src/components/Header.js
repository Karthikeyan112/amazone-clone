import React from 'react';
import './Header.css';
import AmazonLogo from '../images/amazon-logo.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Header = () => {
  const [{basket}] = useStateValue();
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={AmazonLogo} alt="amzon logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="search an item" />
        <SearchIcon className="header__serachIcon" />
      </div>
      <ul className="header__nav">
        <li className="header__option">
          <span className="header__optionOne">Hello</span>
          <Link to="login" className="header__link">
            <span className="header__optionTwo">Sign In</span>
          </Link>
        </li>
        <li className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </li>
        <li className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </li>
        <li className="header__optionBasket">
          <Link to="checkout" className="header__link">
            <ShoppingBasketIcon />
            <span className="header__optionTwo header__basketCount">{basket?.length}</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;