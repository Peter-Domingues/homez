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
      { type: "PropertySubType", props: "SingleFamilyResidence" },
      { type: "ListPrice", props: { min: 0, max: 1000001 } },
      { type: "City", props: "Miami" },
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

  const getMember = useCallback(async () => {
    await fetchMember()
      .then((response) => {
        console.log(response);
      })
      .finally(() => {});
  }, []);

  useEffect(() => {
    getProperties();
    getMember();
  }, []);

  return (
    <>
      <section className="pb90 pb30-md" id="new">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title title-font">
                  FEATURED NEW <span style={{ fontFamily: "OpenSans" }}>&</span>
                  <br />
                  PRE-CONSTRUCTION
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes data={properties} loading={loading} />
          </div>
          {/* End .row */}
        </div>
      </section>
    </>
  );
};

export default New;
