import { formattedPrice } from "@/helpers/priceHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ApartmentTypes = ({ data, loading }) => {
  return (
    <>
      {!loading &&
        data?.map((apartment, index) => (
          <div key={index} className="new-property">
            <div className="feature-style1 mb30 max-height-new">
              <div className="feature-img new-image">
                <Image
                  width={591}
                  height={270}
                  className="w-100 h-100 cover"
                  src={apartment?.Media[0].Thumbnail}
                  alt="city listing"
                />
              </div>
              <div className="feature-content">
                <div className="top-area">
                  <h6 className="title mb-1">
                    {formattedPrice(apartment.ListPrice)}
                  </h6>
                </div>
                <div className="bottom-area">
                  <Link
                    className="ud-btn2"
                    href={`/property-details/${apartment.ListingKey}`}
                  >
                    See Details
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ApartmentTypes;
