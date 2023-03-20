// form to make a new post
// request will be POSTed to /api/items

import React, { useState } from "react";

const initialState = {
  name: "",
  desc: "",
  price: 0,
  category: "",
  image: "",
};

export const AddForm = () => {
  const [formObject, setFormObject] = useState(initialState);

  const handleSubmit = async (e) => {
    // prevent form from refreshing page
    e.preventDefault();
    await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formObject.name}
        onChange={(e) => setFormObject({ name: e.target.value, ...formObject })}
        required
      />
      <label htmlFor="desc">Description</label>
      <input
        type="text"
        name="desc"
        required
        value={formObject.desc}
        onChange={(e) => setFormObject({ desc: e.target.value, ...formObject })}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        required
        value={formObject.price}
        onChange={(e) =>
          setFormObject({ price: e.target.value, ...formObject })
        }
      />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        name="category"
        required
        value={formObject.category}
        onChange={(e) =>
          setFormObject({ category: e.target.value, ...formObject })
        }
      />
      <label htmlFor="image">Link to Image</label>
      <input
        type="text"
        name="image"
        required
        value={formObject.image}
        onChange={(e) =>
          setFormObject({ image: e.target.value, ...formObject })
        }
      />
      <button type="submit">Submit New Item</button>
    </form>
  );
};
