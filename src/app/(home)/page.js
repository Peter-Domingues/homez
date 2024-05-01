import Footer from "@/components/home/footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/Header";
import FilterWithProperties from "@/components/home/filter-with-property";
import Hero from "@/components/home/Hero";
import Cta from "@/components/home/Cta";
import Featured from "@/components/featured";
import Sold from "@/components/sold";
import New from "@/components/new";

export const metadata = {
  title: "Anastasia Benedeti | Real Estate Associate",
};

const Home_V5 = () => {
  return (
    <>
      <Header />
      <MobileMenu />
      <div className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FilterWithProperties />
            </div>
          </div>
        </div>
      </section>
      <Featured />
      <New />
      <Sold />
      <Cta />
      <section className="footer-style1 pt-0 pb-0">
        <Footer />
      </section>
    </>
  );
};

export default Home_V5;
