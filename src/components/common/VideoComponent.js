"use client";

import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

const VideoComponent = ({ source }) => {
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState("none");

  const handleLoad = () => {
    console.log("Video loaded");
    setLoaded(true);
  };

  useEffect(() => {
    console.log("Loaded state changed:", loaded);
    loaded ? setDisplay("block") : setDisplay("none");
  }, [loaded]);

  return (
    <div>
      <LazyLoad height={200} once>
        <div style={{ display: display }}>
          <video
            preload="metadata"
            onLoadedData={handleLoad}
            width="100%"
            autoPlay
            muted
            loop
            playsInline
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
