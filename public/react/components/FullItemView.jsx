export const FullItemView = ({ item, actionButtons }) => {
  return item ? (
    <div className="individual-flex-column">
      <h1 className="individual-title">Title: {item.title}</h1>
      <h3 className="category-header">Category: {item.category}</h3>
      <img className= "individual-img"src={item.image} alt={item.title} />
      <div className="button-flex">
        
      {actionButtons}
      
      </div>
      <div className="text-flex">
        <div className="p-div1">
      <p  className="descriptive-text1">Price: ${item.price}</p>
      </div>
      <div className="p-div2">
      <p className="descriptive-text2">{item.description}</p>
      </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};
