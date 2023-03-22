//  this file (app) should only have routes
// main view should have itemslist etc
import { MainView } from "./MainView";
import { Route, Routes } from "react-router-dom";
import { SingleItemView } from "./SingleItemView";

// this shows how to get id from url with useParam
// Link will be inside itemslist in this format:
// {items.map((id) => (
//   <Link to={`/item/${id}`}>Link to: {id}</Link>
// ))}

export const App = () => {
  // routes is how react-router renders the element and changes the url without reloading the page
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/item/:id" element={<SingleItemView />} />
      </Routes>
    </main>
  );
};
// temporary
