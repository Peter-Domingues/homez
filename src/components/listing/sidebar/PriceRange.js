"use client";
import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useSelector } from "react-redux";

const PriceRange = ({ filterFunctions }) => {
  const filters = useSelector((state) => state.filter);
  const [price, setPrice] = useState({
    value:
      filters.listingStatus === "rent"
        ? { min: 0, max: 50000 }
        : { min: 500000, max: 8000000 },
  });

  const [maxMinPrice, setMaxMinPrice] = useState({
    value:
      filters.listingStatus === "rent"
        ? { min: 0, max: 50000 }
        : { min: 500000, max: 8000000 },
  });

  useEffect(() => {
    console.log("test");
    if (filters.listingStatus === "rent") {
      setPrice({ value: { min: 0, max: 50000 } });

      filterFunctions?.handlepriceRange({
        min: 0,
        max: 50000,
      });

      return setMaxMinPrice({ value: { min: 0, max: 50000 } });
    }

    filterFunctions?.handlepriceRange({
      min: 500000,
      max: 8000000,
    });

    setPrice({ value: { min: 500000, max: 8000000 } });

    return setMaxMinPrice({ value: { min: 500000, max: 8000000 } });
  }, [filters.listingStatus]);

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
          maxValue={maxMinPrice.value.max}
          minValue={maxMinPrice.value.min}
          value={{
            min: filterFunctions?.priceRange.min,
            max: filterFunctions?.priceRange.max,
          }}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="d-flex align-items-center">
          <input
            id="slider-range-value1"
            type="number"
            value={price.value.min}
            onChange={(e) =>
              handleOnChange({ min: e.target.value, max: price.value.max })
            }
          />
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <input
            id="slider-range-value1"
            type="number"
            value={price.value.max}
            onChange={(e) =>
              handleOnChange({ min: price.value.min, max: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
