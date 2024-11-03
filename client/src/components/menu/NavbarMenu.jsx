
import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';
import './styles/NavbarMenu.css';
import logoIFit from '../../assets/logo_iFit.png'

const NavbarMenu = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoIFit}/>
      </div>
      <div className="navbar-buttons">
        <Link to="/wish-list" className="navbar-link" title="Wishlist">
          <FontAwesomeIcon icon={faHeart} />
          <span>Wishlist</span>
        </Link>
        <Link to="/shopping-cart" className="navbar-link" title="Shopping Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart</span>
        </Link>
        <Link to="/user-purchase" className="navbar-link" title="User Purchases">
          <FontAwesomeIcon icon={faClipboardList} />
          <span>Purchases</span>
        </Link>
        <Link to="/user-account" className="navbar-link" title="User Account">
          <FontAwesomeIcon icon={faUser} />
          <span>Account</span>
        </Link>
        
      </div>

    </nav>
    <Outlet/>
    </>
  );
};

export default NavbarMenu;
