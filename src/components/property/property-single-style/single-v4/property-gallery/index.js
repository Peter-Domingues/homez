import React from "react";
import GalleryBox from "./GalleryBox";
import Map from "./Map";
import RealMapView from "./RealMapView";

const PropertyGallery = ({ images }) => {
  return (
    <>
      <div className="ps-v4-hero-tab">
        <div className="tab-content overflow-visible" id="pills-tabContent2">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
              <div className="row" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-12">
                  <div className="ps-v4-hero-slider">
                    <GalleryBox images={images} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End tab-pane gallery */}
        </div>
        {/* End tab-content */}
      </div>
    </>
  );
};

export default PropertyGallery;
