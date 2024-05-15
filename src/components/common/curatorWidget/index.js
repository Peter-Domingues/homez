import { useEffect } from "react";

const CuratorWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/164dc732-8b20-49b2-966b-c1bea7cf8b0d.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt90 pt30-md align-text">
      <h2 className="title title-font">FOLLOW AB</h2>
      <div id="curator-feed-default-feed-layout" className="pt30 feed-insta" />
    </div>
  );
};

export default CuratorWidget;
