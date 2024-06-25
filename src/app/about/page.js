import DefaultHeader from "@/components/common/DefaultHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/footer";
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
      <section className="pb20 pt20">
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
                    Pleasure to meet you, I am Anastasia Benedeti, your real
                    estate associate in Miami
                  </p>
                  <p
                    className="title"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Since day one, I&apos;ve been dedicated to turning dreams
                    into reality by creating the ideal setting for your life.
                    Whether you&apos;re looking for a new home for your family,
                    a solid investment, or the commercial property of your
                    dreams, I&apos;m here to guide you from buying to renting.
                    Let me shape your future so you can focus on what truly
                    matters: enjoying life in the paradise of Miami.
                  </p>
                  <p
                    className="title"
                    style={{ color: "white", textTransform: "uppercase" }}
                  >
                    Let&apos;s start it!
                  </p>
                  <Image
                    width={330}
                    height={89}
                    src="/images/signature.png"
                    alt="Header Logo"
                    style={{ alignSelf: "end" }}
                  />
                  <p
                    className="title mt40"
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
