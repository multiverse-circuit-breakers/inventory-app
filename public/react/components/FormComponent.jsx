// form component is a shell for a form
// it will take an inital state, and submit function
// it will return a live updating display on the side and a form on the right

import React, { useState } from "react";

// redirect sends back to the id view after form is done

// form to make a new post
// request will be POSTed to /api/items
export const FormComponent = ({ initialState, submitFunction }) => {
  const [formObject, setFormObject] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFunction(formObject);
  };

  return (
    <div>
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
        <button type="submit">Submit Form</button>
      </form>
      {/* TODO: add live updating item here  */}
    </div>
  );
};
