import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="container white-bdrt1 py-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center text-lg-start">
            <p className="copyright-text text-gray ff-heading">
              © Econtent {getCurrentYear()} - All rights reserved
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;
