import ApartmentTypes from "@/components/home/ApartmentTypes";

const Sold = () => {
  return (
    <section className="pb90 pb30-md" id="sold">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="0">
          <div className="col-lg-6 mx-auto">
            <div className="main-title2 text-center">
              <h2 className="title title-font">SOLD BY AB</h2>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <ApartmentTypes />
        </div>
        {/* End .row */}
      </div>
    </section>
  );
};

export default Sold;
