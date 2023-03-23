import React from "react";
import { Item } from "./Item";
import { Link } from "react-router-dom";

export const ItemsList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <Item item={item} key={item.title} />
        </Link>
      ))}
    </>
  );
};
