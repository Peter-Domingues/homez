import React from "react";

const ProperytyDescriptions = ({ data }) => {
  return (
    <>
      <p className="text mb10">{data?.PublicRemarks}</p>
      <div className="agent-single-accordion">
        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
        ></div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
