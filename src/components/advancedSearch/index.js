"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import PropertyFilteringBanner from "@/components/listing/grid-view/banner-search-v1/PropertyFilteringBanner";

import React from "react";
import { Provider } from "react-redux";
import store from "@/store/reducers";

export const metadata = {
  title: "Listing | Anastasia Benedeti",
};

const AdvancedSearch = () => {
  return (
    <Provider store={store}>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}
      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      {/* Home Banner Style V1 */}
      <PropertyFilteringBanner />
      {/* Property Filtering */}
      {/* Start Our Footer */}
      <section className="footer-style1 pt-0 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </Provider>
  );
};

export default AdvancedSearch;
