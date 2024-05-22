"use client";

import React from "react";
import ListingStatus from "./ListingStatus";
import PropertyType from "./PropertyType";
import PriceSlider from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import SquareFeet from "./SquareFeet";
import YearBuilt from "./YearBuilt";
import ZipCode from "./ZipCode";
import Location from "./Location";

const ListingSidebar = ({ filterFunctions, handleSearch }) => {
  return (
    <div className="list-sidebar-style1">
      <div className="widget-wrapper">
        <h6 className="list-title">Listing Status</h6>
        <div className="radio-element">
          <ListingStatus filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Property Type</h6>
        <div className="checkbox-style1">
          <PropertyType filterFunctions={filterFunctions} />
        </div>
      </div>

      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Price Range</h6>
        {/* Range Slider Desktop Version */}
        <div className="range-slider-style1">
          <PriceSlider filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Bedrooms</h6>
        <div className="d-flex">
          <Bedroom filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Bathrooms</h6>
        <div className="d-flex">
          <Bathroom filterFunctions={filterFunctions} />
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Square Feet</h6>
        <SquareFeet filterFunctions={filterFunctions} />
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Year Built</h6>
        <YearBuilt filterFunctions={filterFunctions} />
      </div>
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Zip Code#</h6>
        <ZipCode filterFunctions={filterFunctions} />
      </div>

      <div className="widget-wrapper">
        <h6 className="list-title">City</h6>
        <Location filterFunctions={filterFunctions} />
      </div>

      <div className="widget-wrapper mb20">
        <div className="btn-area d-grid align-items-center">
          <button onClick={handleSearch} className="ud-btn btn-thm">
            <span className="flaticon-search align-text-top pr10" />
            Search
          </button>
        </div>
      </div>
      {/* End .widget-wrapper */}

      <div className="reset-area d-flex align-items-center justify-content-between">
        <div
          onClick={() => filterFunctions.resetFilter()}
          className="reset-button cursor"
          href="#"
        >
          <span className="flaticon-turn-back" />
          <u>Reset all filters</u>
        </div>
      </div>
    </div>
  );
};

export default ListingSidebar;
