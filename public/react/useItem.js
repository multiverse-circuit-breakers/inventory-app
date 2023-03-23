import { useState, useEffect } from "react";
import apiURL from "./api";

const useItem = (id) => {
  const [item, setItem] = useState(null);

  const fetchItem = async () => {
    console.log("fetching item", id);
    const res = await fetch(`${apiURL}/items/${id}`);
    const data = await res.json();
    setItem(() => data);
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  return item;
};

export default useItem;
