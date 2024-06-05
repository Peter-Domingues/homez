import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  zipCode: 0,
  propertyId: "",
  listingStatus: "All",
  propertyTypes: ["SingleFamilyResidence"],
  priceRange: { min: 0, max: 100000000 },
  bedrooms: 0,
  bathroms: 0,
  squirefeet: {},
  yearBuilt: {},
  city: "",
  filtersSelected: [
    { type: "PropertySubType", props: "SingleFamilyResidence" },
    { type: "ListPrice", props: { min: 0, max: 100000000 } },
  ],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    changeListingStatus: (state, action) => {
      state.listingStatus = action.payload;
    },
    changePropertyTypes: (state, action) => {
      state.propertyTypes = action.payload;
    },
    changePriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    changeBedrooms: (state, action) => {
      state.bedrooms = action.payload;
    },
    changeBathroms: (state, action) => {
      state.bathroms = action.payload;
    },
    changeSquirefeet: (state, action) => {
      state.squirefeet = action.payload;
    },
    changeYearbuilt: (state, action) => {
      state.yearBuilt = action.payload;
    },
    changeFiltersSelected: (state, action) => {
      state.filtersSelected = action.payload;
    },
    changePropertyId: (state, action) => {
      state.propertyId = action.payload;
    },
    changeZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    clearFilters: () => initialState,
  },
});

export const {
  changeListingStatus,
  changePropertyTypes,
  changePriceRange,
  changeBedrooms,
  changeBathroms,
  changeSquirefeet,
  changeYearbuilt,
  changeFiltersSelected,
  changePropertyId,
  changeZipCode,
  changeCity,
  clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
