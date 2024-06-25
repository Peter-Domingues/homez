"use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/home/footer";
import MobileMenu from "@/components/common/mobile-menu";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyHeader from "@/components/property/property-single-style/single-v4/PropertyHeader";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import PropertyGallery from "./PropertyGallery";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { fetchPropertieById } from "@/api/properties";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";

const PropertyInfoComponent = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const getPropertiesById = useCallback(async (id) => {
    setLoading(true);

    await fetchPropertieById(params.id)
      .then((response) => {
        console.log(response);
        setData(response.value[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getPropertiesById();
  }, []);

  return (
    !loading && (
      <>
        {/* Main Header Nav */}
        <DefaultHeader />
        {/* End Main Header Nav */}

        {/* Mobile Nav  */}
        <MobileMenu />
        {/* End Mobile Nav  */}
        {data ? (
          <>
            {/* Property Slider Gallery */}
            <div className="row mt30">
              <PropertyGallery data={data} />
            </div>
            {/* End Property Slider Gallery */}
            {/* Property All Single V4 */}
            <section className="pt30 pb90 bgc-f7 paddingHorizontal">
              <div className="container">
                <div className="row sp-v5-property-details pl50 pr50">
                  <PropertyHeader data={data} />
                </div>
                {/* End .row */}

                <div className="row mt50 mt30-lg">
                  <div className="col-lg-6">
                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30">Overview</h4>
                      <div className="row">
                        <OverView data={data} />
                      </div>
                    </div>
                    {/* End .ps-widget */}

                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30">Property Description</h4>
                      <ProperytyDescriptions data={data} />
                      {/* End property description */}

                      <h4 className="title fz17 mb30 mt50">Property Details</h4>
                      <div className="row">
                        <PropertyDetails data={data} />
                      </div>
                    </div>
                    {/* End .ps-widget */}

                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                      <h4 className="title fz17 mb30 mt30">Address</h4>
                      <div className="row">
                        <PropertyAddress data={data} />
                      </div>
                    </div>
                  </div>
                  {/* End .col-8 */}

                  <div className="col-lg-6">
                    <div className="column">
                      <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">
                          Get More Information
                        </h4>
                        <InfoWithForm />
                      </div>
                      {/* End Get More Information */}
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </section>
            {/* End Property All Single V4  */}
            {/* Start similar-items  */}{" "}
          </>
        ) : (
          <h4 className="title fz17 mb90 mt90" style={{ textAlign: "center" }}>
            PROPERTY NOT FOUND
          </h4>
        )}
        {/* Start Our Footer */}
        <section className="footer-style1 pt60 pb-0">
          <Footer />
        </section>
        {/* End Our Footer */}
      </>
    )
  );
};

export default PropertyInfoComponent;
