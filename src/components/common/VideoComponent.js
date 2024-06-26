"use client";

import { useEffect, useState, useRef } from "react";
import LazyLoad from "react-lazyload";

const VideoComponent = ({ source }) => {
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState("none");
  const videoRef = useRef(null);

  const handleLoad = () => {
    console.log("Video loaded");
    setLoaded(true);
  };

  useEffect(() => {
    console.log("Loaded state changed:", loaded);
    loaded ? setDisplay("block") : setDisplay("none");
  }, [loaded]);

  useEffect(() => {
    if (videoRef.current && loaded) {
      videoRef.current.play().catch((error) => {
        console.log("Error attempting to play video:", error);
      });
    }
  }, [loaded]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure the video is muted
      videoRef.current.playsInline = true; // Ensure the video plays inline
      if (loaded) {
        videoRef.current.play().catch((error) => {
          console.log("Error attempting to play video on mobile:", error);
        });
      }
    }
  }, [loaded]);

  return (
    <div>
      <LazyLoad height={200} once>
        <div style={{ display: display }}>
          <video
            ref={videoRef}
            preload="metadata"
            onLoadedData={handleLoad}
            width="100%"
            autoPlay
            muted
            loop
            playsinline
          >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </LazyLoad>
    </div>
  );
};

export default VideoComponent;
