import { useParams } from "react-router-dom";
import { ActionButtons } from "./ActionButtons";
import { FullItemView } from "./FullItemView";
import useItem from "../useItem";

export const ItemPageView = () => {
  const { id } = useParams();
  // fetch item by id param
  const item = useItem(id);

  return <FullItemView item={item} actionButtons={<ActionButtons id={id} />} />;
};
