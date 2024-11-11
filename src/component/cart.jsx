import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css'
const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <p>{item.name}</p>
            <p className="cart-item-quantity">Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;