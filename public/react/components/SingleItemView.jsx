import apiURL from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const SingleItemView = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  const fetchItem = async () => {
    console.log("fetching item", id);
    const res = await fetch(`${apiURL}/items/${parseInt(id) + 1}`);
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
    </div>
  ) : (
    <p>Loading...</p>
  );
};
