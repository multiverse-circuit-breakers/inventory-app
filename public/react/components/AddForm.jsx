import React, { useState } from "react";
import apiURL from "../api";

// redirect sends back to the id view after form is done
import { useNavigate } from "react-router-dom";
import { FormComponent } from "./FormComponent";

const initialState = {
  title: "",
  description: "",
  price: 0,
  category: "",
  image: "",
};

// form to make a new post
// request will be POSTed to /api/items
export const AddForm = () => {
  const redirect = useNavigate();

  const submitFunction = async (formObject) => {
    // prevent form from refreshing page
    // e.preventDefault();
    try {
      const res = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      const data = await res.json();
      redirect(`/item/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormComponent
      initialState={initialState}
      submitFunction={submitFunction}
    />
  );
};
