"use client";
import Select from "react-select";
import PriceRange from "../../listing/sidebar/PriceRange";
import Bedroom from "../../listing/sidebar/Bedroom";
import Bathroom from "../../listing/sidebar/Bathroom";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBathroms,
  changeBedrooms,
  changeCity,
  changeFiltersSelected,
  changePriceRange,
  changePropertyId,
  changeSquirefeet,
  changeZipCode,
} from "@/store/reducers/filterReducer";
import SquareFeet from "@/components/listing/sidebar/SquareFeet";
import Location from "@/components/listing/sidebar/Location";
import ZipCode from "@/components/listing/sidebar/ZipCode";

const AdvanceFilterModal = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);
  const router = useRouter();
  const catOptions = [
    { value: "Condominium", label: "Condo" },
    { value: "Townhouse", label: "Townhouse" },
    { value: "SingleFamilyResidence", label: "Single Family" },
    { value: "Commercial", label: "Commercial" },
  ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#1f6769"
          : isHovered
          ? "#1f676912"
          : isFocused
          ? "#1f676912"
          : undefined,
      };
    },
  };

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
  const handlePropertyId = (elm) => {
    dispatch(changePropertyId(elm.target.value));
  };

  const handlesquirefeet = (elm) => {
    const parseLivingArea = { min: elm[0], max: elm[1] };
    addOrRemoveFilters("LivingArea", parseLivingArea);
    dispatch(changeSquirefeet(parseLivingArea));
  };

  const handleZipCode = (elm) => {
    addOrRemoveFilters("PostalCode", elm);
    dispatch(changeZipCode(elm));
  };
  const handleCity = (elm) => {
    addOrRemoveFilters("City", elm);
    dispatch(changeCity(elm));
  };
  const filterFunctions = {
    handleZipCode,
    handleCity,
    handlebedrooms,
    handlepriceRange,
    handlebathroms,
    handlesquirefeet,
    bathroms: filters.bathroms,
    bedrooms: filters.bedrooms,
    priceRange: filters.priceRange,
    squirefeet: filters.squirefeet,
  };

  return (
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header pl30 pr30">
          <h5 className="modal-title" id="exampleModalLabel">
            More Filter
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End modal-header */}

        <div className="modal-body pb-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="widget-wrapper">
                <h6 className="list-title mb20">Price Range</h6>
                <div className="range-slider-style modal-version">
                  <PriceRange filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Type</h6>
                <div className="form-style2 input-group">
                  <Select
                    defaultValue={[catOptions[1]]}
                    name="colors"
                    options={catOptions}
                    styles={customStyles}
                    className="select-custom"
                    classNamePrefix="select"
                    required
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">MLS #</h6>
                <div className="form-style2">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handlePropertyId}
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Bedrooms</h6>
                <div className="d-flex">
                  <Bedroom filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Bathrooms</h6>
                <div className="d-flex">
                  <Bathroom filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Zip Code#</h6>
                <div className="form-style2 input-group">
                  <ZipCode filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">Square Feet</h6>

                <SquareFeet filterFunctions={filterFunctions} />
              </div>
            </div>
            {/* End .col-md-6 */}
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="widget-wrapper">
                <h6 className="list-title">City</h6>
                <div className="form-style2 input-group">
                  <Location filterFunctions={filterFunctions} />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End modal body */}

        <div className="modal-footer justify-content-between">
          <button className="reset-button">
            <span className="flaticon-turn-back" />
            <u>Reset all filters</u>
          </button>
          <div className="btn-area">
            <button
              data-bs-dismiss="modal"
              type="submit"
              className="ud-btn btn-thm"
              onClick={() => router.push("/listing")}
            >
              <span className="flaticon-search align-text-top pr10" />
              Search
            </button>
          </div>
        </div>
        {/* End modal-footer */}
      </div>
    </div>
  );
};

export default AdvanceFilterModal;
