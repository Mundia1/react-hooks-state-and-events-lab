import React, { useState } from "react";

function Item({ name, category }) {
  // State for tracking whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle the item in and out of the cart
  const toggleCart = () => setInCart(!inCart);

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className="add">
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
