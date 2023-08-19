import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart]=useState(false)
  const itemClass = inCart ? "in-cart" : ""

  function handleClick(){
    setInCart(!inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}


export default Item;
