import apiURL from "../api";
import { ItemsList } from "./ItemsList";
import React, { useState, useEffect } from "react";
import { NavBar } from './Navbar';
import { Link } from "react-router-dom";
// import and prepend the api url to any fetch calls

export const MainView = () => {
  const [items, setItems] = useState(null);

  //GET fetch request for all items
  async function fetchItems() {
    try {
      const res = await fetch(`${apiURL}/items`);
      const itemsData = await res.json();
      setItems(() => [...itemsData]);
    } catch (err) {
      console.log("Error!", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return items ? (
    <>
      <main>
        <h1 className="heading">Sauce Store</h1>
        <div><hr className="item-div-line"></hr></div>
        <NavBar />
        <div><hr className="item-div-line2"></hr></div>
        <div className="wrapper">
          <ItemsList items={items} />
        </div>
      </main>
      <Link to="/item/add">
        <button className='main-button'>Add Item</button>
      </Link>
    </>
  ) : (
    <p>Loading...</p>
  );
};
