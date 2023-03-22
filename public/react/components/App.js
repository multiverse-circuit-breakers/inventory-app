import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";
import { Route, Routes, Link, useParams } from "react-router-dom";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

const ComponentWithID = () => {
  const { id } = useParams();
  return <div>ID is {id}</div>;
};

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
      <Link to="/">Home</Link>
      <Link to="/items">items</Link>
      {[1, 2, 3].map((id) => (
        <Link to={`/item/${id}`}>Link to: {id}</Link>
      ))}
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Home</h1>
            </main>
          }
        />
        <Route path="/item/:id" element={<ComponentWithID />} />
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
