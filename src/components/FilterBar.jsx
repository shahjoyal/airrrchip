import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const FilterBar = () => {
  return (
    <div className="toolbar-container">
      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search name & ID" />
      </div>

      <div className="right-section">
        {/* Date Picker */}
        <input type="date" className="date-picker" />

        {/* Filter Button */}
        <button className="filter-button">
          <FaFilter /> Filter by
        </button>

        {/* Export Button */}
        <button className="green-button">Export</button>
      </div>
    </div>
  );
};

export default FilterBar;

