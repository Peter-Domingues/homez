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
import MyListings from "../myListings";

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
      <section className="pt-0 pb110 bgc-green-light pb50-md paddingHorizontal">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FilterWithProperties />
            </div>
          </div>
        </div>
      </section>
      <MyListings />

      <Divider />
      <Featured />
      <Divider />
      <New />
      <Divider />
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
                    Let&apos;s get started!
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
                    #NEWHOME #MOVETOMIAMI #TOPAGENT
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
        <div className="hide-free-label">
          <a
            style={{ color: "inherit" }}
            target="_blank"
            className="advance-search-icon ud-btn btn-thm"
            href="https://www.google.com/maps/place/Miami+Realty+Solution+Group/@25.7700997,-80.1976658,17z/data=!4m8!3m7!1s0x88d9b684f5abfcd9:0x760aaaedeefb450f!8m2!3d25.7700997!4d-80.1950909!9m1!1b1!16s%2Fg%2F1w6_pmdr?entry=ttu"
          >
            Review
          </a>
        </div>
      </div>
      <section className="footer-style1 pt-0 pb-0">
        <Footer />
      </section>
    </Provider>
  );
}
