import FeaturedListings from "@/components/home/FeatuerdListings";

const Featured = () => {
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
            <FeaturedListings />
          </div>
          {/* End .row */}
        </div>
      </section>
    </>
  );
};

export default Featured;
