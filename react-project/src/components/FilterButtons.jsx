import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      {["All", "Completed", "Pending"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={filter === f ? "active" : ""}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
