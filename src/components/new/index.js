"use client";
import { fetchInfo, fetchMember } from "@/api/properties";
import ApartmentTypes from "@/components/home/ApartmentTypes";
import { useCallback, useEffect, useState } from "react";

const New = () => {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(false);

  const getProperties = useCallback(async () => {
    setLoading(true);

    const filterProps = [
      { type: "ListPrice", props: { min: 1000000, max: 8000000 } },
      { type: "YearBuilt", props: { min: 2025, max: 2030 } },
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
      <section className="pb90 pb30-md paddingHorizontal" id="new">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title title-font">PRE-CONSTRUCTION</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes data={properties} loading={loading} />
          </div>
          {/* End .row */}
        </div>
        <div className="neo">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#ffffff",
              fontSize: "24px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div className="col-lg-12 position-relative">
              <h3 className="mobile-text h6 title-font text-white title-font-size mb-0">
                ACCESS ALL PRE-CONSTRUCTION
              </h3>
              <h3 className="mobile-text h6 title-font text-white title-font-size ">
                IN SOUTH FLORIDA
              </h3>

              <a
                className="advance-search-icon ud-btn btn-thm"
                target="_blank"
                href="https://www.newestateonly.com/landing/An1348/Anastasia_Mastantuono"
              >
                FULL ACCESS
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default New;
