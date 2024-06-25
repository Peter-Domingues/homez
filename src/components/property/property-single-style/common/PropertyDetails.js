import { formattedPrice } from "@/helpers/priceHelper";
import React from "react";

const PropertyDetails = ({ data }) => {
  const columns = [
    [
      {
        label: "MLS #",
        value: data?.ListingId,
      },
      {
        label: "Price",
        value: formattedPrice(data?.ListPrice),
      },
      {
        label: "Property Size",
        value: `${data?.BuildingAreaTotal ?? data?.LotSizeArea} Sq Ft`,
      },
      {
        label: "Bathrooms",
        value: data?.BathroomsTotalInteger,
      },
      {
        label: "Bedrooms",
        value: data?.BedroomsTotal,
      },
    ],
    [
      {
        label: "Garage",
        value: data?.GarageSpaces,
      },

      {
        label: "Year Built",
        value: data?.YearBuilt,
      },
      {
        label: "Property Type",
        value: data?.PropertyType,
      },
      {
        label: "Property Status",
        value: data?.PropertyType?.includes("Lease") ? "For rent" : "For sale",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) =>
            detail.value ? (
              <div key={index} className="d-flex justify-content-between">
                <div className="pd-list">
                  <p className="fw600 mb10 ff-heading dark-color">
                    {detail.label}
                  </p>
                </div>
                <div className="pd-list">
                  <p className="text mb10">{detail.value}</p>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
