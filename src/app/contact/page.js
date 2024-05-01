import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Form from "@/components/pages/contact/Form";
import Image from "next/image";

export const metadata = {
  title: "Contact | Anastasia Benedeti",
};

const Contact = () => {
  return (
    <>
      <DefaultHeader />
      <MobileMenu />

      <section className="pt40">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-5 position-relative">
              <div className="home8-contact-form default-box-shadow1 bdrs12  bdr1 p30 mb30-md bgc-white">
                <h4 className="form-title mb25">Send Us An Email</h4>
                <Form />
              </div>
            </div>

            <div className="col-lg-5 position-relative">
              <div
                className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white"
                style={{ minHeight: "100%" }}
              >
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="form-title mb25">Contact us</h4>
                    <label className="heading-color ff-heading fw600 mb10">
                      Address
                    </label>
                    <p>90 Sw 3rd st, office #3, Miami FL Miami, FL 33130</p>
                    <label className="heading-color ff-heading fw600 mb10">
                      Phone
                    </label>
                    <p>+1 786 523 9723</p>
                    <label className="heading-color ff-heading fw600 mb10">
                      Mail
                    </label>
                    <p>anastasia@abrealestatefl.com</p>
                    <label className="heading-color ff-heading fw600 mb10">
                      Follow Us
                    </label>
                    <p>90 Sw 3rd st, office #3, Miami FL Miami, FL 33130</p>
                  </div>
                  <div className="col-lg-6 hide-mobile">
                    <Image
                      width={541}
                      height={700}
                      src="/images/contact.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* End .col */}
          </div>
        </div>
      </section>
      {/* Start Our Footer */}
      <section className="footer-style1 pt-0 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Contact;
