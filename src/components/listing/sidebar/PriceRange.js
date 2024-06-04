"use client";
import React, { useEffect, useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useSelector } from "react-redux";

const PriceRange = ({ filterFunctions }) => {
  const filters = useSelector((state) => state.filter);
  const priceDefaultRent = { min: 0, max: 50000 };
  const priceDefaultSale = { min: 500000, max: 8000000 };

  const [price, setPrice] = useState({
    value:
      filters.priceRange !== priceDefaultSale
        ? filters.priceRange
        : filters.listingStatus === "rent"
        ? priceDefaultRent
        : priceDefaultSale,
  });

  const [maxMinPrice, setMaxMinPrice] = useState({
    value:
      filters.listingStatus === "rent"
        ? { min: 0, max: 50000 }
        : { min: 500000, max: 8000000 },
  });

  useEffect(() => {
    if (filters.priceRange == priceDefaultSale) {
      if (filters.listingStatus === "rent") {
        setPrice({ value: priceDefaultRent });

        filterFunctions?.handlepriceRange(priceDefaultRent);
        return setMaxMinPrice({ value: { min: 0, max: 50000 } });
      }

      filterFunctions?.handlepriceRange(priceDefaultSale);

      setPrice({ value: priceDefaultSale });
      return setMaxMinPrice({ value: { min: 500000, max: 8000000 } });
    }
    setPrice({ value: filters.priceRange });
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
            min: filters?.priceRange.min,
            max: filters?.priceRange.max,
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
