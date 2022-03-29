import React from "react";
import { useState } from "react/cjs/react.development";

function Item({ name, category }) {

  const[inCart, setInCart] = useState(false);

  function handleCart() {
    setInCart((inCart) => !inCart);
  }  
  return (
    <li className={inCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart? "in-cart" : "add"} onClick={handleCart}>{inCart? "Remove from Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
