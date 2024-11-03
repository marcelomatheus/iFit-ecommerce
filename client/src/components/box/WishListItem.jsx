import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import './style/WishListItem.css';

const WishlistItem = ({ item, onViewDetails }) => {
  return (
    <div className="wishlist-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button className="view-button" onClick={() => onViewDetails(item.id)}>
          <FontAwesomeIcon icon={faEye} /> View Details
        </button>
      </div>
      <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
    </div>
  );
};

export default WishlistItem;
