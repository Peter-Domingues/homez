"use client";
import { fetchInfo } from "@/api/properties";
import FeaturedListings from "@/components/home/FeatuerdListings";
import { useCallback, useEffect, useState } from "react";
import ApartmentTypes from "../home/ApartmentTypes";

const Featured = () => {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(false);

  const getProperties = useCallback(async () => {
    setLoading(true);

    const filterProps = [
      { type: "PropertySubType", props: "SingleFamilyResidence" },
      { type: "City", props: "Miami" },
      { type: "ListPrice", props: { min: 0, max: 8000001 } },
    ];

    await fetchInfo(0, filterProps, "sale", "", "6")
      .then((response) => {
        let propertiesList = [];

        response.value.forEach((item) => {
          if (item.Media) {
            propertiesList.push(item);
          }
        });

        setProperties(propertiesList);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <section className="pb90 pb30-md mt40" id="featured">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title title-font">FEATURED PROPERTIES</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes data={properties} loading={loading} />
            {/* <FeaturedListings properties={properties} /> */}
          </div>
          {/* End .row */}
        </div>
      </section>
    </>
  );
};

export default Featured;
