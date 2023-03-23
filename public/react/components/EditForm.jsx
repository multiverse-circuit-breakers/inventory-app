// Form to edit an item
// Item props are
import apiURL from "../api";

// redirect sends back to the id view after form is done
import { useParams, useNavigate } from "react-router-dom";
const itemPropList = ["title", "description", "price", "category", "image"];

// Form should have option selector which sets state to whatever property needs to change
import React, { useEffect, useState } from "react";
import apiURL from "../api";
import { FormComponent } from "./FormComponent";
export const EditForm = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const [formObject, setFormObject] = useState(null);

  useEffect(async () => {
    const res = await fetch(`${apiURL}/items/${id}`);
    const data = await res.json();
    setFormObject(() => data);
  }, [id]);

  const submitFunction = async (formObject) => {
    try {
      await fetch(`${apiURL}/items/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      redirect(`/item/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return formObject ? (
    <FormComponent initialState={formObject} submitFunction={submitFunction} />
  ) : (
    <p>Loading...</p>
  );
};
