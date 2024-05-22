"use client";

import React from "react";

const PropertyType = ({ filterFunctions }) => {
  const options = [
    { value: "Condominium", label: "Condominium" },
    { value: "Townhouse", label: "Townhouse" },
    { value: "SingleFamilyResidence", label: "Single Family" },
    { value: "Commercial", label: "Commercial" },
    { value: "Land", label: "Land" },
  ];

  console.log(filterFunctions.propertyTypes);
  return (
    <>
      <label className="custom_checkbox">
        All
        <input
          type="checkbox"
          checked={!filterFunctions?.propertyTypes.length}
          onChange={(e) => {
            filterFunctions.handlepropertyTypes("");
          }}
        />
        <span className="checkmark" />
      </label>
      {options.map((option, index) => (
        <label className="custom_checkbox" key={index}>
          {option.label}
          <input
            type="checkbox"
            checked={filterFunctions?.propertyTypes.includes(option.value)}
            onChange={(e) => {
              filterFunctions.handlepropertyTypes(option.value);
            }}
          />
          <span className="checkmark" />
        </label>
      ))}
    </>
  );
};

export default PropertyType;
