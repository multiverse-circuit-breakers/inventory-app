import apiURL from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import useItem from "../useItem";
// link to edit button + delete button
const ActionButtons = ({ id }) => {
  const redirect = useNavigate();

  const deleteAction = async () => {
    try {
      await fetch(`${apiURL}/items/${id}`, {
        method: "DELETE",
      });
      // go back home after delete
      console.log("deleted item", id);
      redirect("/");
    } catch (err) {
      console.log("Error!", err);
    }
  };

  return (
    <div>
      <Link to={`/item/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={deleteAction}>Delete</button>
    </div>
  );
};

export const SingleItemView = () => {
  const { id } = useParams();
  const item = useItem(id);

  // on render fetch the item from the db

  return item ? (
    <div>
      <h1>Title: {item.title}</h1>
      <h3>Category: {item.category}</h3>
      <img src={item.image} alt={item.title} />
      <ActionButtons id={id} />
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
