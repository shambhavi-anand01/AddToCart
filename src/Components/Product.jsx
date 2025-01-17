import React, { useState } from 'react';
import { useCart } from './CartContext';

const Product = ({ id, name, description, price, image }) => {
  const [quantity, setQuantity] = useState(0);
  const { handleAddProToCart } = useCart();

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };
  const handleAddToCart = () => {
    if (quantity > 0) {
      const productDetails = {
        id,
        name,
        price,
        quantity,
        image,
      };
      handleAddProToCart(productDetails);
    }
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'center',
        width: '200px',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <button onClick={handleAddToCart} style={{
                  backgroundColor: '#0000ff',
                  color: '#fff',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}>Add to Cart</button>
    </div>
  );
};

export default Product;
