import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = null //await axios.get('/api/products'); 
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      }
    };
    fetchProducts();
  }, []);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="product-page">
      <div className="filters">
        <input
          type="text"
          placeholder="Pesquisar produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

       
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Todas as Categorias</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="esportes">Esportes</option>
          <option value="vestuario">Vestuário</option>

        </select>

        <div className="price-filter">
          <label>Faixa de Preço:</label>
          <input
            type="number"
            placeholder="Mínimo"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          />
          <input
            type="number"
            placeholder="Máximo"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          />
        </div>
      </div>


      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>R$ {product.price.toFixed(2)}</p>
            <button onClick={() => handleViewProduct(product.id)}>Ver Mais</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
