//  this file (app) should only have routes
// main view should have itemslist etc
import React, { useState, useEffect } from "react";
import { MainView } from "./MainView";
import { Route, Routes, useParams } from "react-router-dom";

// this shows how to get id from url with useParam
// Link will be inside itemslist in this format:
// {items.map((id) => (
//   <Link to={`/item/${id}`}>Link to: {id}</Link>
// ))}

const Item = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is the id: {id}</h1>
    </div>
  );
};

export const App = () => {
  // routes is how react-router renders the element and changes the url without reloading the page
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </main>
  );
};
// temporary
