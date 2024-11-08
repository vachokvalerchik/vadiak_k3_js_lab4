// components/Cart.js
import React from 'react';

const Cart = ({ cartItems, onClose, onRemoveItem }) => {
  return (
    <div className="cart">
      <h2>Basket</h2>
      <button className="close-button" onClick={onClose}>Закрити</button>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your basket is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button className="remove-button" onClick={() => onRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
