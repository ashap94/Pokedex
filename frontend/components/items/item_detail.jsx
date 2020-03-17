import React from "react";

const ItemDetail = props => {
  return (
    <ul>
      <li>
        <h3>{props.item.name}</h3>
      </li>

      <li>Happiness: {props.item.happiness}</li>
      <li>Price: {props.item.price}</li>
    </ul>
  );
};

export default ItemDetail;
