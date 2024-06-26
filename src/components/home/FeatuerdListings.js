"use client";
import { formattedPrice } from "@/helpers/priceHelper";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FeaturedListings = ({ properties }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        pagination={{
          el: ".featured-pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {properties?.slice(0, 6).map((listing) =>
          listing.ListingId !== "A11527942" &&
          listing.ListingId !== "A11531793" ? (
            <SwiperSlide key={listing?.id}>
              <div className="item">
                <div className="listing-style7 mb60">
                  <div className="list-thumb featured-image-height">
                    <Image
                      width={382}
                      height={248}
                      className="w-100 h-100 cover"
                      src={listing?.Media[0].Thumbnail}
                      alt="listings"
                    />
                    <div className="sale-sticker-wrap">
                      {listing.StandardStatus !== "Active" ? (
                        <div
                          className="list-tag rounded-0 fz12"
                          style={{ backgroundColor: "#bc2423" }}
                        >
                          CLOSED
                        </div>
                      ) : listing.PropertyType.includes("Lease") ? (
                        <div className="list-tag rounded-0 fz12">
                          <span className="flaticon-electricity" />
                          FOR RENT
                        </div>
                      ) : (
                        <div className="list-tag2 rounded-0 fz12">FOR SALE</div>
                      )}
                    </div>

                    <div className="list-meta">
                      <Link
                        className="ud-btn2"
                        style={{ display: "contents", color: "white" }}
                        href={`/property-details/${listing.ListingId}`}
                      >
                        See Details
                        <i className="fal fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                  <div className="list-content">
                    <h6 className="list-title">
                      <Link href={`/single-v4/${listing?.id}`}>
                        {listing?.title}
                      </Link>
                    </h6>

                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="title mb-1">{listing.City}</h6>
                      <div className="list-price">
                        {formattedPrice(listing?.ListPrice)}
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
            </SwiperSlide>
          ) : (
            <></>
          )
        )}
      </Swiper>

      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <button className="featured-prev__active swiper_button">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featured-pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="featured-next__active swiper_button">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeaturedListings;
