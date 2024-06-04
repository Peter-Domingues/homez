"use client";

import React, { useState, useEffect, useCallback } from "react";
import Pagination from "../../Pagination";
import FeaturedListings from "./FeatuerdListings";
import TopFilterBar from "./TopFilterBar";

import ListingSidebar from "../../sidebar";
import { fetchInfo, fetchPropertieById } from "@/api/properties";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBathroms,
  changeBedrooms,
  changeCity,
  changeFiltersSelected,
  changeListingStatus,
  changePriceRange,
  changePropertyTypes,
  changeSquirefeet,
  changeYearbuilt,
  changeZipCode,
  clearFilters,
} from "@/store/reducers/filterReducer";

export default function PropertyFilteringBanner() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);
  const [currentSortingOption, setCurrentSortingOption] = useState("Newest");

  const [pageNumber, setPageNumber] = useState(1);
  const [colstyle, setColstyle] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(false);

  const getProperties = useCallback(async (page, filter, rentOrSale) => {
    setLoading(true);

    await fetchInfo(page, filter, rentOrSale)
      .then((response) => {
        let propertiesList = [];
        setTotalPages(response.page_count);
        response.value.forEach((item) => {
          if (item.Media) {
            propertiesList.push(item);
          }
        });

        setProperties(propertiesList);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getPropertiesById = useCallback(async (id) => {
    setLoading(true);

    await fetchPropertieById(id)
      .then((response) => {
        console.log(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (filters.propertyId) return getPropertiesById(filters.propertyId);
    setPageNumber(1);
    getProperties(0, filters.filtersSelected, "");
  }, []);

  useEffect(() => {
    if (pageNumber > 1)
      getProperties(
        pageNumber - 1,
        filters.filtersSelected,
        filters.listingStatus
      );
  }, [pageNumber]);

  const [categories, setCategories] = useState([]);

  const resetFilter = () => {
    dispatch(clearFilters());
    setPageNumber(1);
    setCurrentSortingOption("Newest");
    document.querySelectorAll(".filterInput").forEach(function (element) {
      element.value = null;
    });
    getProperties(
      0,
      [
        { type: "PropertySubType", props: "SingleFamilyResidence" },
        { type: "ListPrice", props: { min: 1000000, max: 8000001 } },
      ],
      ""
    );
  };

  const [searchQuery, setSearchQuery] = useState("");

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

  const handlelistingStatus = (elm) => {
    dispatch(changeListingStatus(elm));
  };

  const handlepropertyTypes = (elm) => {
    if (elm.length == 0) {
      dispatch(changePropertyTypes([]));
      addOrRemoveFilters("PropertySubType", "");
    } else {
      const newProperties = filters.propertyTypes.includes(elm)
        ? filters.propertyTypes.filter((el) => el != elm)
        : [...filters.propertyTypes, elm];

      dispatch(changePropertyTypes(newProperties));
      addOrRemoveFilters("PropertySubType", newProperties);
    }
  };

  const handlepriceRange = (elm) => {
    addOrRemoveFilters("ListPrice", elm);
    dispatch(changePriceRange(elm));
  };

  const handlebedrooms = (elm) => {
    addOrRemoveFilters("BedroomsTotal", elm);
    dispatch(changeBedrooms(elm));
  };

  const handlebathroms = (elm) => {
    addOrRemoveFilters("BathroomsTotalInteger", elm);
    dispatch(changeBathroms(elm));
  };

  const handlesquirefeet = (elm) => {
    const parseLivingArea = { min: elm[0], max: elm[1] };
    addOrRemoveFilters("LivingArea", parseLivingArea);
    dispatch(changeSquirefeet(parseLivingArea));
  };
  const handleyearBuilt = (elm) => {
    const parseYearBuilt = { min: elm[0], max: elm[1] };

    addOrRemoveFilters("YearBuilt", parseYearBuilt);
    dispatch(changeYearbuilt(elm));
  };

  const handleZipCode = (elm) => {
    addOrRemoveFilters("PostalCode", elm);
    dispatch(changeZipCode(elm));
  };
  const handleCity = (elm) => {
    addOrRemoveFilters("City", elm);
    dispatch(changeCity(elm));
  };

  const handleSearch = () => {
    setPageNumber(1);
    getProperties(0, filters.filtersSelected, filters.listingStatus);
  };

  const filterFunctions = {
    handlelistingStatus,
    handlepropertyTypes,
    handlepriceRange,
    handlebedrooms,
    handlebathroms,
    handlesquirefeet,
    handleyearBuilt,
    handleZipCode,
    handleCity,
    priceRange: filters.priceRange,
    listingStatus: filters.listingStatus,
    propertyTypes: filters.propertyTypes,
    resetFilter,
    bedrooms: filters.bedrooms,
    bathroms: filters.bathroms,
    squirefeet: filters.squirefeet,
    yearBuilt: filters.yearBuilt,
    zipCode: filters.zipCode,
    city: filters.city,
    categories,
    setSearchQuery,
  };

  return (
    <>
      <section className="breadcumb-section bgc-f7">
        <div className="main-title2 text-center">
          <h2 className="title title-font">ADVANCED SEARCH</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title title-font">Miami</h2>
                <div className="breadcumb-list">
                  <a href="/">Home</a>
                  <a href="#">Advanced Search</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt0 pb90 bgc-f7">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-4">
              <div className="list-sidebar-style1">
                <div className="widget-wrapper">
                  <h6 className="list-title">Search</h6>
                  <ListingSidebar
                    handleSearch={handleSearch}
                    filterFunctions={filterFunctions}
                  />
                </div>
                {/* End widget-wrapper */}
              </div>
              {/* End .list-sidebar-style1 */}
            </div>
            {/* End col-4 */}

            <div className="col-lg-8">
              <div className="row align-items-center mb20">
                <TopFilterBar
                  colstyle={colstyle}
                  setColstyle={setColstyle}
                  setCurrentSortingOption={setCurrentSortingOption}
                />
              </div>
              {!loading && (
                <div className="row mt15">
                  <FeaturedListings colstyle={colstyle} data={properties} />
                </div>
              )}
              {/* End .row */}

              <div className="row text-center">
                <Pagination
                  currentPage={pageNumber}
                  totalPages={totalPages}
                  setCurrentPage={setPageNumber}
                />
              </div>
              {/* End .row */}
            </div>
            {/* End col-8 */}
          </div>
          {/* End TopFilterBar */}
        </div>
        {/* End .container */}
      </section>
      {/* Property Filtering */}
    </>
  );
}
