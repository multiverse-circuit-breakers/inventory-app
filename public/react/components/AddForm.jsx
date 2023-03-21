// form to make a new post
// request will be POSTed to /api/items

import React, { useState } from "react";
import apiURL from "../api";

const initialState = {
  title: "",
  description: "",
  price: 0,
  category: "",
  image: "",
};

export const AddForm = () => {
  const [formObject, setFormObject] = useState(initialState);

  const handleSubmit = async (e) => {
    // prevent form from refreshing page
    e.preventDefault();
    try {
      await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formObject.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        required
        value={formObject.description}
        onChange={handleChange}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        required
        value={formObject.price}
        onChange={handleChange}
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        required
        value={formObject.category}
        onChange={handleChange}
      />
      <label htmlFor="image">Link to Image</label>
      <input
        type="text"
        name="image"
        required
        value={formObject.image}
        onChange={handleChange}
      />
      <button type="submit">Submit New Item</button>
    </form>
  );
};
