import { useParams } from "react-router-dom";
import { ActionButtons } from "./ActionButtons";

import useItem from "../useItem";

export const SingleItemView = () => {
  const { id } = useParams();
  // fetch item by id param
  const item = useItem(id);

  return item ? (
    <div>
      <h1>Title: {item.title}</h1>
      <h3>Category: {item.category}</h3>
      <img src={item.image} alt={item.title} />
      <ActionButtons id={id} />
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
