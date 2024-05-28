"use client";
import { fetchMember } from "@/api/properties";
import FeaturedListings from "@/components/home/FeatuerdListings";
import { useCallback, useEffect, useState } from "react";

const MyListings = () => {
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(false);

  const getMember = useCallback(async () => {
    await fetchMember()
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
    getMember();
  }, []);

  return (
    <>
      <section className="pb90 pb30-md mt40" id="featured">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title title-font">My Listings</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <FeaturedListings properties={properties} />
          </div>
          {/* End .row */}
        </div>
      </section>
    </>
  );
};

export default MyListings;
