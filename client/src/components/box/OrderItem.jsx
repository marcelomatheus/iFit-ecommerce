import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTruck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './OrderItem.css';

const OrderItem = ({ order }) => {
  const renderStatusIcon = () => {
    switch (order.status) {
      case 'preparando':
        return <FontAwesomeIcon icon={faBox} className="status-icon preparing" />;
      case 'em transporte':
        return <FontAwesomeIcon icon={faTruck} className="status-icon in-transit" />;
      case 'entregue':
        return <FontAwesomeIcon icon={faCheckCircle} className="status-icon delivered" />;
      default:
        return null;
    }
  };

  return (
    <div className="order-item">
      <div className="order-header">
        <div className="order-status">
          {renderStatusIcon()}
          <span>{order.status}</span>
        </div>
        <div className="order-date">
          <span>Data de Compra: {new Date(order.date).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="order-products">
        <h4>Produtos:</h4>
        <ul>
          {order.products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.quantity}x - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderItem;
