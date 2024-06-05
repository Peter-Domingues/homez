"use client";
import React, { useEffect, useState } from "react";
import CurrencyInput from "react-currency-input-field";
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
        : { min: 0, max: 100000000 },
  });

  const [maxMinPrice, setMaxMinPrice] = useState({
    value: { min: 0, max: 100000000 },
  });

  useEffect(() => {
    if (filters.priceRange == priceDefaultSale) {
      if (filters.listingStatus === "rent") {
        setPrice({ value: priceDefaultRent });

        return filterFunctions?.handlepriceRange(priceDefaultRent);
      }

      filterFunctions?.handlepriceRange(priceDefaultSale);

      return setPrice({ value: priceDefaultSale });
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
          <CurrencyInput
            id="slider-range-value1"
            value={price.value.min}
            allowDecimals={false}
            onValueChange={(e) =>
              handleOnChange({
                min: e,
                max: price.value.max,
              })
            }
            prefix={"$"}
            step={10}
            decimalsLimit={2}
          />
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />

          <CurrencyInput
            id="slider-range-value2"
            value={price.value.max}
            allowDecimals={false}
            onValueChange={(e) =>
              handleOnChange({
                min: price.value.min,
                max: e,
              })
            }
            prefix={"$"}
            step={10}
            decimalsLimit={2}
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
