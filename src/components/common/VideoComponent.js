"use client";

import { useState } from "react";
import LazyLoad from "react-lazyload";

const VideoComponent = ({ source }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      <LazyLoad height={200} once>
        <div style={{ display: loaded ? "block" : "none" }}>
          <video
            preload="metadata"
            onLoadedData={handleLoad}
            width="100%"
            autoPlay
            muted
            loop
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
