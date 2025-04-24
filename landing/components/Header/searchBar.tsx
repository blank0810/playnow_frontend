"use client";
import { useState } from "react";
import { HiAdjustments } from "react-icons/hi"; // Cleaner filter icon (funnel/hamburger style)

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState<null | keyof typeof filters>(null);

  const filters = {
    store: activeFilter === "store",
    location: activeFilter === "location",
    coupon: activeFilter === "coupon",
  };

  const handleFilterChange = (key: keyof typeof filters) => {
    setActiveFilter(activeFilter === key ? null : key); // toggle selected filter
  };

  return (
    <div className="relative w-full max-w-[500px]">
      <div
        className={`flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white dark:bg-gray-800 h-11 space-x-2 transition-all duration-200 ${
          activeFilter ? "max-w-[450px]" : "max-w-[500px]"
        } overflow-x-auto`}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow bg-transparent outline-none text-sm text-black dark:text-white placeholder:text-gray-500 min-w-[100px]"
          placeholder="Search..."
        />

        {/* Filter badge (only one at a time) */}
        {activeFilter && (
          <span
            className="flex items-center text-xs px-2 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-white rounded-full whitespace-nowrap"
          >
            {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
            <button
              onClick={() => setActiveFilter(null)}
              className="ml-1 text-xs text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </span>
        )}

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white flex-shrink-0"
        >
          <HiAdjustments size={22} />
        </button>
      </div>

      {/* Filter Dropdown */}
      {showFilters && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-50">
          <div className="p-3 text-sm text-black dark:text-white space-y-2">
            {["store", "location", "coupon"].map((key) => (
              <label
                key={key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="singleFilter"
                  checked={activeFilter === key}
                  onChange={() => handleFilterChange(key as keyof typeof filters)}
                />
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
