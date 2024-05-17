"use client";
import Footer from "@/components/home/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/Header";
import FilterWithProperties from "@/components/home/filter-with-property";
import Hero from "@/components/home/Hero";
import Cta from "@/components/home/Cta";
import Featured from "@/components/featured";
import Sold from "@/components/sold";
import New from "@/components/new";
import Divider from "@/components/common/Divider";
import { Provider } from "react-redux";
import store from "@/store/reducers";
import CuratorWidget from "../common/curatorWidget";
import Image from "next/image";

export default function HomeComponent() {
  return (
    <Provider store={store}>
      <Header />
      <MobileMenu />
      <div className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      <section className="pt-0 pb110 bgc-green-light pb50-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FilterWithProperties />
            </div>
          </div>
        </div>
      </section>
      <Featured />
      <Divider />

      {/* <New /> */}
      {/* <Divider /> */}
      <Sold />
      <Cta />

      <section className="pb0 pt0">
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

      <CuratorWidget />
      <div className="testimonials pb90 pb30-md pt90 p30-md">
        <h2 className="title title-font ">TESTIMONIALS</h2>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <div
          class="elfsight-app-383394dc-1b9d-4627-87e3-092d80fffc67"
          data-elfsight-app-lazy
        ></div>
      </div>
      <section className="footer-style1 pt-0 pb-0">
        <Footer />
      </section>
    </Provider>
  );
}
