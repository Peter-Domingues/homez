"use client";

import { formattedPrice } from "@/helpers/priceHelper";
import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  return (
    <>
      {data?.map((listing) => (
        <div
          className={` ${colstyle ? "col-sm-12" : "col-sm-6"}  `}
          key={listing.ListingKey}
        >
          <div
            className={
              colstyle
                ? "listing-style7 listCustom listing-type"
                : "listing-style7"
            }
          >
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                style={{ height: "228px" }}
                className="w-100  cover"
                src={listing?.Media[0]?.Thumbnail}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {listing.PropertyType.includes("Lease") ? (
                  <div className="list-tag rounded-0 fz12">
                    <span className="flaticon-electricity" />
                    FOR RENT
                  </div>
                ) : (
                  <div className="list-tag2 rounded-0 fz12">FOR SALE</div>
                )}
              </div>
              <div className="list-meta">
                <a
                  href={`/propertydetails/${listing.ListingKey}`}
                  className="mr5"
                >
                  <span className="flaticon-fullscreen" />
                </a>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v5/${listing.id}`}>{listing.title}</Link>
              </h6>

              <div className="d-flex justify-content-between align-items-center">
                <div className="list-price">{listing.City ?? "Miami"}</div>
                <div className="list-price">
                  {formattedPrice(listing.ListPrice)}{" "}
                  {listing.PropertyType.includes("Lease") && <span>/ mo</span>}
                </div>
                <div className="list-meta2 d-flex align-items-center">
                  <a href="#" className="mr10">
                    <span className="flaticon-bed mr5" />{" "}
                    {listing?.BedroomsTotal}
                  </a>
                  <a href="#" className="mr10">
                    <span className="flaticon-shower mr5" />{" "}
                    {listing?.BathroomsTotalInteger}
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" />{" "}
                    {listing?.BuildingAreaTotal}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
