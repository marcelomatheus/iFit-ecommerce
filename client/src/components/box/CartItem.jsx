// src/components/CartItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './style/CartItem.css';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Preço: R${item.price}</p>
        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.id)}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          <FontAwesomeIcon icon={faTrash} /> Remove
        </button>
      </div>
      <div className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
