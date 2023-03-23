import { useState, useEffect } from "react";
export const SearchBar = ({ updateSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) return;
    updateSearch(search);
  }, [search]);
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
