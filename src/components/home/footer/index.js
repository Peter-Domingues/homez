import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import Social from "./Social";
import Copyright from "./Copyright";
import MenuWidget from "./MenuWidget";

const Footer = () => {
  return (
    <>
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row">
          <div className="col-lg-5 bgc-green-dark pt40 pb40">
            <div
              className="mt-4"
              style={{
                borderRight: "0.5px solid white",
                height: "80px",
                width: "50%",
              }}
            ></div>
            <div
              className="footer-widget mb-4 mt-4 footer-image"
              style={{ textAlign: "center" }}
            >
              <Link className="footer-logo" href="/">
                <Image
                  width={390}
                  height={88}
                  src="/images/nameLogo.png"
                  alt=""
                />
              </Link>
            </div>
            <div
              className="footer-widget mb-4 mt-4 footer-image-mobile"
              style={{ textAlign: "center" }}
            >
              <Link className="footer-logo" href="/">
                <Image
                  width={300}
                  height={68}
                  src="/images/nameLogo.png"
                  alt=""
                />
              </Link>
            </div>
            <div
              className="mb-4"
              style={{
                borderRight: "0.5px solid white",
                height: "80px",
                width: "50%",
              }}
            ></div>
          </div>
          <div
            className="col-lg-7 pt40"
            style={{
              alignContent: "end",
            }}
          >
            <div
              className="row footer-widget mb-4 mb-lg-5"
              style={{ justifyContent: "center" }}
            >
              <ContactMeta />
              <MenuWidget />
              <div className="social-widget footer-column">
                <h6 className="text-white mb20">Follow us on social media</h6>
                <Social />
              </div>
            </div>
            <Copyright />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
