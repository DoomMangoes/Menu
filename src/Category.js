import React from "react";

export default function Category({ categories, filter }) {
  return (
    <div className="menu-bar">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="menu-button"
            key={index}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
