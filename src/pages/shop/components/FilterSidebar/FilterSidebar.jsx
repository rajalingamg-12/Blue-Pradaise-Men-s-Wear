import React from "react";
import "./FilterSidebar.css";

const categories = [
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Blazers",
  "Hoodies",
  "Trousers"
];

const brands = [
  "Louis Philippe",
  "Allen Solly",
  "Peter England",
  "Levi's",
  "Van Heusen",
  "Jack & Jones",
  "Arrow",
  "U.S. Polo"
];

const colors = [
  "White",
  "Black",
  "Blue",
  "Grey",
  "Brown",
  "Beige",
  "Red"
];

const sizes = [
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "30",
  "32",
  "34",
  "36"
];

function FilterSidebar({
  filters,
  setFilters
}) {

  const handleCheckbox = (field, value) => {

    setFilters((prev) => ({

      ...prev,

      [field]:
        prev[field] === value
          ? ""
          : value

    }));

  };

  return (

    <div className="filter-sidebar">

      <h3>Filters</h3>

      {/* Category */}

      <div className="filter-section">

        <h4>Category</h4>

        {categories.map((item) => (

          <label key={item}>

            <input
              type="checkbox"
              checked={filters.category === item}
              onChange={() =>
                handleCheckbox("category", item)
              }
            />

            {item}

          </label>

        ))}

      </div>

      {/* Brand */}

      <div className="filter-section">

        <h4>Brand</h4>

        {brands.map((item) => (

          <label key={item}>

            <input
              type="checkbox"
              checked={filters.brand === item}
              onChange={() =>
                handleCheckbox("brand", item)
              }
            />

            {item}

          </label>

        ))}

      </div>

      {/* Color */}

      <div className="filter-section">

        <h4>Color</h4>

        <select
          value={filters.color}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              color: e.target.value
            }))
          }
        >

          <option value="">
            All
          </option>

          {colors.map((item) => (

            <option
              key={item}
              value={item}
            >

              {item}

            </option>

          ))}

        </select>

      </div>

      {/* Size */}

      <div className="filter-section">

        <h4>Size</h4>

        <select
          value={filters.size}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              size: e.target.value
            }))
          }
        >

          <option value="">
            All
          </option>

          {sizes.map((item) => (

            <option
              key={item}
              value={item}
            >

              {item}

            </option>

          ))}

        </select>

      </div>

      {/* Price */}

      <div className="filter-section">

        <h4>

          Max Price ₹{filters.price}

        </h4>

        <input
          type="range"
          min="500"
          max="10000"
          step="100"
          value={filters.price}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              price: Number(e.target.value)
            }))
          }
        />

      </div>

      <button
        className="clear-filter"
        onClick={() =>
          setFilters({
            category: "",
            brand: "",
            color: "",
            size: "",
            price: 10000
          })
        }
      >

        Clear Filters

      </button>

    </div>

  );

}

export default FilterSidebar;