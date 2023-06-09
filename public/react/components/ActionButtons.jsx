import apiURL from "../api";
import { Link, useNavigate } from "react-router-dom";
// link to edit button + delete button
export const ActionButtons = ({ id }) => {
  const redirect = useNavigate();

  const deleteAction = async () => {
    try {
      await fetch(`${apiURL}/items/${id}`, {
        method: "DELETE",
      });
      // go back home after delete
      console.log("deleted item", id);
      redirect("/");
    } catch (err) {
      console.log("Error!", err);
    }
  };

  return (
    <div className="button-flex">
      <Link to={`/item/${id}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button onClick={deleteAction} className="delete-button">
        Delete
      </button>
    </div>
  );
};
