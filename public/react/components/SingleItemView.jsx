import { useParams } from "react-router-dom";

export const SingleItemView = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is the id: {id}</h1>
    </div>
  );
};
