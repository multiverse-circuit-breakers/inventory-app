import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { Route, Routes } from "react-router-dom";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();
      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchSauces();
  }, []);

  //GET fetch request for all items
  async function fetchItems() {
    try {
      const res = await fetch(`${apiURL}/items`);
      const itemsData = await res.json();
      setItems(itemsData);
    } catch (err) {
      console.log("Error!", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Routes>
        {/* TODO: create main view */}
        {/* this file (app) should only have routes */}
        {/* main view should have itemslist etc */}
        <Route path="/" element={<ItemsList items={items} />} />
        {/* TODO: this will link to an item component  */}
        {/* Link will be inside itemslist in this format: */}
        {/* {items.map((id) => ( */}
        {/*   <Link to={`/item/${id}`}>Link to: {id}</Link> */}
        {/* ))} */}
        <Route path="/item/:id" element={<div></div>} />
      </Routes>
    </div>
  );
};
// temporary
// {/* <main> */}
// {/*   <h1 className="heading">Sauce Store</h1> */}
// {/*   <h3 id="heading2">All things 🔥</h3> */}
// {/*   <ItemsList items={items} /> */}
// {/* </main> */}
