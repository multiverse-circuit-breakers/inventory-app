import apiURL from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Link, redirect } from "react-router-dom";
// link to edit button + delete button
const ActionButtons = ({ id }) => {
  const deleteAction = async () => {
    await fetch(`${apiURL}/items/${id}`, {
      method: "DELETE",
    });
    // go back home after delete
    redirect("/");
  };

  return (
    <div>
      <Link to={`items/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={deleteAction}>Delete</button>
    </div>
  );
};

export const SingleItemView = () => {
  const [item, setItem] = useState(null);
  const id = parseInt(useParams().id) + 1;

  const fetchItem = async () => {
    console.log("fetching item", id);
    const res = await fetch(`${apiURL}/items/${id}`);
    const data = await res.json();
    setItem(() => data);
  };

  // on render fetch the item from the db
  useEffect(() => {
    fetchItem();
  }, []);

  return item ? (
    <div>
      <h1>Title: {item.title}</h1>
      <img src={item.image} alt={item.title} />
      <ActionButtons id={id} />
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
