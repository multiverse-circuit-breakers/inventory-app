import React from "react";
import { Item } from "./Item";
import { Link } from "react-router-dom";

export const ItemsList = ({ items }) => {
  return Object.entries(items).map(([category, values]) => {
    return ( <>
    <div className="category-div">
      <div className='category-title'>
        <h2 id={category}>{category.toUpperCase()}</h2>
      </div>
      <div className="category">
        {values.map((item) => (
          <Link className="single-view" key={item.id} to={`/item/${item.id}`}>
            <Item item={item} key={item.title} />
          </Link>
        ))}
      </div>
    </div>
      </> 
    );
  });
};
