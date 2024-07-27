import React, { useState } from 'react';
import './App.css';
import ItemCard from './components/ItemCard';
import Cart from './components/Cart';

const items = [
  {
      id: 1,
      name: 'Mouse',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 50
  },
  {
      id: 2,
      name: 'Keyboard',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
<<<<<<< HEAD
      price: 130
=======
      price: 150
>>>>>>> 6af398f ('Update')
  },
  {
      id: 3,
      name: 'Monitor',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D',
      price: 300
  },
  {
      id: 4,
      name: 'Mouse Pad',
      image: 'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 20
  },
  {
      id: 5,
      name: 'Printer',
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 200
  },
  {
      id: 6,
      name: 'Laptop',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww',
      price: 1000
  },
  {
      id: 7,
      name: 'Coka-cola',
      image: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 30
  },
  {
      id: 8,
      name: 'Tech Wear',
      image: 'https://t4.ftcdn.net/jpg/05/88/53/73/360_F_588537391_cV7h8YECScFs1jbv5gYCS6UWnPwyBhSP.jpg',
      price: 100
  },
  {
      id: 9,
<<<<<<< HEAD
      name: 'Web Dev E-Book',
=======
      name: 'Web Development E-Book',
>>>>>>> 6af398f ('Update')
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 10
  },
  {
      id: 10,
      name: 'React Book',
      image: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh95coelvsycl5byd9oy7.jpg',
      price: 20
  },
  {
      id: 11,
      name: 'Tech Shoes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHKY5rCX8b4oluD7kDPd0c8PJfx-MvK6xzw&s',
      price: 50
  },
  {
      id: 12,
      name: 'Python Book',
      image: 'https://m.media-amazon.com/images/I/51M3xZKX9hL._AC_UF1000,1000_QL80_.jpg',
      price: 100 
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const changeQuantity = (itemId, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="main row">
      <div className="container1 col-8">
        <div className="items-container">
          <h3>Shopping Cart App</h3>
          <div className="items">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>

      <div className="container2 col-4">
        <div className="cart-container">
          <Cart cartItems={cartItems} changeQuantity={changeQuantity} clearCart={clearCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
