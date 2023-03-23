import apiURL from "../api";
import { ItemsList } from "./ItemsList";
import { SearchBar } from "./SearchBar";
import React, { useState, useEffect, useMemo } from "react";
import { NavBar } from "./Navbar";
import { Link } from "react-router-dom";
// import and prepend the api url to any fetch calls

export const MainView = () => {
  const [allItems, setAllItems] = useState(null);
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  //GET fetch request for all items
  async function fetchItems() {
    try {
      const res = await fetch(`${apiURL}/items`);
      const itemsData = await res.json();
      setAllItems(() => [...itemsData]);
    } catch (err) {
      console.log("Error!", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const categories = useMemo(() => {
    if (!allItems) return null;
    const categories = {};
    allItems.forEach((item) => {
      if (!item.title.toLowerCase().includes(search.toLowerCase())) return;
      if (!categories[item.category]) {
        categories[item.category] = [];
      }
      categories[item.category].push(item);
    });
    return categories;
  }, [allItems, search]);

  return allItems ? (
    <>
      <main>
        <SearchBar updateSearch={updateSearch} />
        <h1 className="heading">Sauce Store</h1>
        <div>
          <hr className="item-div-line"></hr>
        </div>
        <NavBar categories={categories} />
        <div>
          <hr className="item-div-line2"></hr>
        </div>
        <div className="wrapper">
          <ItemsList items={categories} />
        </div>
      </main>
      <Link to="/item/add">
        <button className="main-button">Add Item</button>
      </Link>
    </>
  ) : (
    <p>Loading...</p>
  );
};
