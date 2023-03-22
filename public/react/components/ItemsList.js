import React from "react";
import { Item } from "./Item";
import { Link } from "react-router-dom";

export const ItemsList = ({ items }) => {
  return (
    <>
      {items.map((item, id) => (
        <Link to={`/item/${id}`}>
          <Item item={item} key={id} />
        </Link>
      ))}
    </>
  );
};
