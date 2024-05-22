"use client";

const ZipCode = ({ filterFunctions }) => {
  return (
    <div className="space-area">
      <div className="d-flex align-items-center justify-content-between">
        <div className="form-style1">
          <input
            type="number"
            className="form-control filterInput"
            placeholder={99999}
            onChange={(e) =>
              filterFunctions?.handleZipCode(parseInt(e.target.value))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ZipCode;
