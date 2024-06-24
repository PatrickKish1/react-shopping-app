import React from 'react';

const Cart = ({ cartItems, changeQuantity, clearCart }) => {
  const calculateTotal = () => {
    let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2);
  };

  const calculateTax = () => {
    let subtotal = calculateTotal();
    let tax = subtotal * 0.12;
    return tax.toFixed(2);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart">
      <h4>Cart</h4>
      <ul className="list-group cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            <div className="item-info">
              <div className="item-image"><img src={item.image} style={{ width: '80px' }} alt="" /></div>
              <div className="item-details">
                <h5 className="item-name">{item.name}</h5>
                <h6 className="item-price">${(item.price * item.quantity).toLocaleString()}</h6>
              </div>
            </div>
            <div className="quantity">
              <button className="quantity-button minus" onClick={() => changeQuantity(item.id, item.quantity - 1)}>-</button>
              <div className="count">{item.quantity}</div>
              <button className="quantity-button plus" onClick={() => changeQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="check-out">
        <p>Subtotal: <span className="subtotal float-right">${calculateTotal()}</span></p>
        <p>Tax(12%): <span className="tax float-right">${calculateTax()}</span></p>
        <p>Total: <span className="total float-right">${(parseFloat(calculateTotal()) + parseFloat(calculateTax())).toFixed(2)}</span></p>

        <div className="buttons row">
          <button className="btn btn-danger form-control col-5" onClick={handleClearCart}>Clear All</button>
          <button className="btn btn-primary form-control col-5">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
