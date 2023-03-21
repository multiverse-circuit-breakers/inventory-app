// Form to edit an item
// Item props are
import apiURL from "../api";

const itemPropList = ["title", "description", "price", "category", "image"];

// Form should have option selector which sets state to whatever property needs to change
import React, { useState } from "react";
export const EditForm = ({ id }) => {
  const [currentItemProp, setCurrentItemProp] = useState(itemPropList[0]);
  const [currentItemValue, setCurrentItemValue] = useState("");

  const handlePropChange = (e) => {
    setCurrentItemProp(e.target.value);
  };

  const handleValueChange = (e) => {
    setCurrentItemValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${apiURL}/items/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ [currentItemProp]: currentItemValue }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="props-dropdown">Select a prop:</label>
      <select
        name="props-dropdown"
        value={currentItemProp}
        onChange={handlePropChange}
      >
        {itemPropList.map((prop) => (
          <option key={prop} value={prop}>
            {prop}
          </option>
        ))}
      </select>

      <label htmlFor="prop-value-input">Enter a value:</label>
      <input
        type="text"
        id="prop-value-input"
        value={currentItemValue}
        onChange={handleValueChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
