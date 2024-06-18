"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import LookingFor from "./LookingFor";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFiltersSelected,
  changeListingStatus,
  changePriceRange,
  changePropertyId,
} from "@/store/reducers/filterReducer";
import { formattedPrice } from "@/helpers/priceHelper";
import CurrencyInput from "react-currency-input-field";

const FilterContent = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");
  const [maxMinPrice, setMaxMinPrice] = useState({
    value:
      filters.listingStatus === "rent"
        ? { min: 0, max: 100000000 }
        : { min: 0, max: 100000000 },
  });
  const [price, setPrice] = useState({ value: { min: 0, max: 100000000 } });

  const addOrRemoveFilters = (type, value) => {
    if (value === "") {
      const newFilters = filters.filtersSelected.filter((e) => e.type !== type);
      return dispatch(changeFiltersSelected(newFilters));
    }

    if (!filters.filtersSelected.some((e) => e.type === type)) {
      dispatch(
        changeFiltersSelected([
          ...filters.filtersSelected,
          { type, props: value },
        ])
      );
    } else {
      const newFilters = filters.filtersSelected.filter((e) => e.type !== type);
      dispatch(changeFiltersSelected([...newFilters, { type, props: value }]));
    }
    return;
  };

  const handleTabClick = (tab) => {
    dispatch(changeListingStatus(tab === "buy" ? "sale" : "rent"));

    if (tab === "buy") {
      setMaxMinPrice({ value: { min: 500000, max: 8000000 } });
      addOrRemoveFilters("ListPrice", { min: 500000, max: 8000000 });

      setPrice({ value: { min: 500000, max: 8000000 } });
    } else {
      setMaxMinPrice({ value: { min: 0, max: 50000 } });
      addOrRemoveFilters("ListPrice", { min: 0, max: 50000 });
      setPrice({ value: { min: 0, max: 50000 } });
    }

    setActiveTab(tab);
  };

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
  ];

  const handleOnChange = (value) => {
    setPrice({ value });
    addOrRemoveFilters("ListPrice", {
      min: value.min,
      max: value.max,
    });

    dispatch(
      changePriceRange({
        min: value.min || price.min,
        max: value.max || price.max,
      })
    );
  };

  const handleSearch = () => {
    if (filters.propertyId)
      return router.push(`/propertydetails/${filters.propertyId}`);
    return router.push("/listing");
  };

  const converter = (price) => {
    var formatted = parseFloat(price).toLocaleString("en-US", {
      style: "currency",
      currency: "US",
    });
    document.getElementById("priceInput").value = formatted;
  };

  return (
    <div className="advance-style4 at-home5 mt-100 mt50-lg mb10 mx-auto animate-up-2">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content text-start">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style3 at-home5">
              <div className="row align-items-center">
                <div className="col-md-4 col-xl-3 bdrr1 bdrrn-sm">
                  <label>MLS #</label>
                  <div className="advance-search-field position-relative">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <input
                          className="form-control bgc-f7 bdrs12 ps-0"
                          type="text"
                          onChange={(e) =>
                            dispatch(changePropertyId(e.target.value))
                          }
                        />
                      </div>
                    </form>
                  </div>
                </div>

                {/* End .col-3 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0 px-0">
                    <div className="bootselect-multiselect">
                      <label className="fz14">Looking For</label>
                      <LookingFor addOrRemoveFilters={addOrRemoveFilters} />
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0">
                    <div className="dropdown-lists">
                      <label className="fz14 mb-1">Price</label>
                      <div
                        className="btn open-btn text-start dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        style={{ fontSize: "13px" }}
                      >
                        {formattedPrice(price.value.min)} -{" "}
                        {formattedPrice(price.value.max)}{" "}
                        <i className="fas fa-caret-down" />
                      </div>
                      <div className="dropdown-menu">
                        <div className="widget-wrapper pb20 mb0 pl20 pr20">
                          <div className="range-wrapper at-home10">
                            <InputRange
                              formatLabel={() => ``}
                              maxValue={maxMinPrice.value.max}
                              minValue={maxMinPrice.value.min}
                              value={price.value}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings" /> Advanced Search
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="button"
                      onClick={handleSearch}
                    >
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterContent;
