import React from 'react';

const ItemCard = ({ item, addToCart }) => {
  return (
    <div className="card">
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title text-center">{item.name}</h4>
        <p className="card-text text-center">Price: ${item.price}</p>
        <button className="add-to-cart btn btn-dark form-control" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
