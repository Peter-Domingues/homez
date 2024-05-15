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
      <New />
      <Divider />
      <Sold />
      <Cta />
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
