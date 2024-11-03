
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderItem from '../components/OrderItem';
import './OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = //await axios.get('https://api.exemplo.com/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders data:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <h1>Meus Pedidos</h1>
      <div className="orders-list">
        {orders.length === 0 ? (
          <p>Você não tem pedidos.</p>
        ) : (
          orders.map((order) => <OrderItem key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
