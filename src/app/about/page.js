import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Image from "next/image";

export const metadata = {
  title: "About  || Anastasia Benedeti | Real Estate Associate",
};

const About = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div
          style={{
            backgroundColor: "rgb(19 72 82 / 70%)",
            display: "flex",
            alignItems: "center",
            height: "100%",
            marginLeft: "15%",
          }}
        >
          <h3
            style={{
              fontFamily: "Safira March",
              color: "white",
              lineHeight: 2.3,
              padding: "0px 70px",
            }}
          >
            PLEASURE <br />
            TO MEET <br />
            <span style={{ borderBottom: "1px solid" }}>YOU</span>
          </h3>
          <Image
            width={110}
            height={110}
            src="/images/AB_icon_W.png"
            alt="Header Logo"
            style={{ alignSelf: "end" }}
          />
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Abut intro */}
      <section className="pb-0 pt-0">
        <div className="cta-banner3 bgc-green-dark mx-auto maxw1600 pt100 pt60-lg pb90 pb60-lg position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-5 pl30-md pl15-xs"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="mb30">
                  <p
                    className="title"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Pleasure to meet you, my name is Anastasia Benedeti. I’m a
                    Real Estate Associate & Development in Miami.
                  </p>
                  <p
                    className="title"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Since day one, passionate about making dreams come through
                    the ideal setting for your life. Whether it’s a new home for
                    you or your family, a solid investment, or the commercial
                    property of your dreams, f rom buying to renting, I am here
                    to shape your future and let you focus on what truly
                    matters: enjoying life in a PARADISE like Miami.
                  </p>
                  <p
                    className="title"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Let’s start it!
                  </p>
                  <Image
                    width={330}
                    height={89}
                    src="/images/signature.png"
                    alt="Header Logo"
                    style={{ alignSelf: "end" }}
                  />
                  <p
                    className="title"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    #NEWHOME#MOVETOMIAMI#TOPAGENT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Abut intro */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt-0 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default About;
