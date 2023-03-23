// Form to edit an item
// Item props are
import apiURL from "../api";
import useItem from "../useItem";
// redirect sends back to the id view after form is done
import { useParams, useNavigate } from "react-router-dom";

// Form should have option selector which sets state to whatever property needs to change
import React, { useEffect, useState } from "react";
import apiURL from "../api";
import { FormComponent } from "./FormComponent";
export const EditForm = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const item = useItem(id);

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

  return item ? (
    <FormComponent initialState={item} submitFunction={submitFunction} />
  ) : (
    <p>Loading...</p>
  );
};
