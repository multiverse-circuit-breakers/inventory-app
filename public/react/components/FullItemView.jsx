export const FullItemView = ({ item, actionButtons }) => {
  return item ? (
    <div className="individual-flex-column">
      <h1 className="individual-title">Title: {item.title}</h1>
      <h3 className="category-header">Category: {item.category}</h3>
      <img className="individual-img" src={item.image} alt={item.title} />
      <div>{actionButtons}</div>
      <div className="text-flex">
        <p className="descriptive-text">Price: ${item.price}</p>
        <p className="descriptive-text">{item.description}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
