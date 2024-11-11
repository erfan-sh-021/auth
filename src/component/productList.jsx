import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/cartSlice';
import '../App.css'
const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;