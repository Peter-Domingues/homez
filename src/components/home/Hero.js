"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import VideoComponent from "../common/VideoComponent";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const videoSource = [
    {
      type: "video",
      src: "images/page4.mp4",
      thumb: "/images/page4.png",
      mobile: "/images/page4mobile.mp4",
    },
    {
      type: "video",
      src: "images/page2.mp4",
      thumb: "/images/page2.png",
      mobile: "/images/page2mobile.mp4",
    },
    {
      type: "video",
      src: "images/page3.mp4",
      thumb: "/images/page3.png",
      mobile: "/images/page3mobile.mp4",
    },
    {
      type: "image",
      src: "/images/page1.png",
      thumb: "/images/page1.png",
      mobile: "/images/page1mobile.png",
    },
  ];

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="horizontal" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 0, disableOnInteraction: false }}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "700px" }}
        >
          {videoSource.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === "image" ? (
                <div className="item">
                  <div
                    className="slider-slide-item"
                    style={{ backgroundImage: `url(${item.src})` }}
                    data-thumb={item.src}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "#ffffff",
                        fontSize: "24px",
                      }}
                    >
                      <div className="col-lg-12 text-left position-relative">
                        <h3 className="h6 title-font text-white title-font-size">
                          WELCOME
                        </h3>
                        <h3 className="h6 title-font text-white title-font-size">
                          BUY
                          <span style={{ fontFamily: "OpenSans" }}> . </span>
                          SELL
                          <span style={{ fontFamily: "OpenSans" }}> . </span>
                          RENT
                          <span style={{ fontFamily: "OpenSans" }}> . </span>
                          INVEST
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ position: "relative", width: "100%" }}>
                  <div style={{ display: "block" }}>
                    {/* Container for video */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: "56.25%",
                      }}
                    >
                      {/* Video */}
                      <div className="mobile">
                        <VideoComponent source={item.mobile || item.src} />
                      </div>
                      <div className="pc">
                        <VideoComponent source={item.src} />
                      </div>

                      {/* Overlay with filter and text */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          top: "20%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "#ffffff",
                          fontSize: "24px",
                        }}
                      >
                        <div className="col-lg-12 text-left position-relative">
                          <h3 className="h6 title-font text-white title-font-size">
                            WELCOME
                          </h3>
                          <h3 className="h6 title-font text-white title-font-size">
                            BUY
                            <span style={{ fontFamily: "OpenSans" }}> . </span>
                            SELL
                            <span style={{ fontFamily: "OpenSans" }}> . </span>
                            RENT
                            <span style={{ fontFamily: "OpenSans" }}> . </span>
                            INVEST
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                // <VideoComponent source={item.src} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Set the direction to vertical
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={videoSource.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {videoSource.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={item.thumb}
                alt="thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
