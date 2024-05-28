"use client";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({ filterFunctions }) => {
  const [price, setPrice] = useState({ value: { min: 120000, max: 8000000 } });

  // price range handler
  const handleOnChange = (value) => {
    setPrice({ value });

    filterFunctions?.handlepriceRange({
      min: value.min || 0,
      max: value.max || price.max,
    });
  };

  return (
    <>
      <div className="range-wrapper">
        <InputRange
          formatLabel={() => ``}
          maxValue={100000000}
          minValue={500000}
          value={{
            min: filterFunctions?.priceRange.min,
            max: filterFunctions?.priceRange.max,
          }}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="d-flex align-items-center">
          <span id="slider-range-value1">${price.value.min}</span>
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <span id="slider-range-value2">${price.value.max}</span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
