import { useState, useEffect } from "react";
export const SearchBar = ({ updateSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateSearch(search);
  }, [search]);
  return (
      <input className="search-bar"
        type="text"
        placeholder="Search:"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
  );
};
