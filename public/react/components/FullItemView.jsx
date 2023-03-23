export const FullItemView = ({ item, actionButtons }) => {
  return item ? (
    <div>
      <h1>Title: {item.title}</h1>
      <h3>Category: {item.category}</h3>
      <img src={item.image} alt={item.title} />
      {actionButtons}
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
