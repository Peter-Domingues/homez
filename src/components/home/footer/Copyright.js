import React from "react";
import Image from "next/image";

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
        <div className="col-sm-6">
          <Image
            width={100}
            height={43}
            src="/images/MIAMI_Realtors_logo_KO.png"
            alt=""
          />
          <Image
            width={100}
            height={34}
            src="/images/miamirealtysolution.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
