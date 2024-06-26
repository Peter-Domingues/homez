import Image from "next/image";

const Sold = () => {
  const soldMock = [
    {
      Media: "/images/2.png",
    },
    {
      Media: "/images/3.png",
    },
    {
      Media: "/images/4.png",
    },
    {
      Media: "/images/5.png",
    },
    {
      Media: "/images/6.png",
    },
  ];
  return (
    <section className="pb90 pb30-md paddingHorizontal" id="sold">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="0">
          <div className="col-lg-6 mx-auto">
            <div className="main-title2 text-center">
              <h2 className="title title-font">RECENTLY SOLD</h2>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="row" data-aos="fade-up" data-aos-delay="300">
          {soldMock?.map((apartment, index) => (
            <div key={index} className={"new-property-3"}>
              <div className="feature-style1 mb30 max-height-new">
                <div className="feature-img new-image">
                  <Image
                    width={591}
                    height={270}
                    className="w-100 h-100 cover"
                    src={apartment?.Media}
                    alt="city listing"
                    style={{ objectPosition: "bottom" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End .row */}
      </div>
    </section>
  );
};

export default Sold;
