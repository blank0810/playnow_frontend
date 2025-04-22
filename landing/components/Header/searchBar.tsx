"use client";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white dark:bg-gray-800 h-11">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent outline-none text-sm text-black dark:text-white placeholder:text-gray-500"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
