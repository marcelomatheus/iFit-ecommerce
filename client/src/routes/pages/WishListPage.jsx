import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WishlistItem from '../../components/box/WishListItem';
import '../../components/box/style/WishListItem.css';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    
    const fetchWishlistData = async () => {
      try {
        const response = await //axios.get('https://api.exemplo.com/wishlist');
        setWishlistItems(response.data);
      } catch (error) {
        console.error('Error fetching wishlist data:', error);
      }
    };

    fetchWishlistData();
  }, []);

  const handleViewDetails = (id) => {
    console.log(`Opening details for product with id: ${id}`);
    // Redirecionar usuário para página do produto
  };

  return (
    <div className="wishlist-page">
      <h1>Sua lista de desejos</h1>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <WishlistItem key={item.id} item={item} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
