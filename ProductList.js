import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products using the proxy path
    fetch('/api/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
