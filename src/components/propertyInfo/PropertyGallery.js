"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const PropertyGallery = ({ data }) => {
  return (
    <>
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              {data?.Media && (
                <Item
                  original={data?.Media[0]?.Thumbnail}
                  thumbnail={data?.Media[0]?.Thumbnail}
                  width={1600}
                  height={1066}
                >
                  {({ ref, open }) => (
                    <Image
                      src={data?.Media[0]?.Thumbnail}
                      width={591}
                      height={558}
                      ref={ref}
                      onClick={open}
                      alt="image"
                      role="button"
                      className="w-100 h-100 cover"
                    />
                  )}
                </Item>
              )}
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6" style={{ height: "280px !important" }}>
          <div className="row">
            {data &&
              data?.Media?.slice(0, 4).map((image, index) => (
                <div className="col-6 ps-sm-0" key={index}>
                  <div className="sp-img-content">
                    <div
                      className={`popup-img preview-img-${
                        index + 2
                      } sp-img mb10`}
                    >
                      <Item
                        original={image.Thumbnail}
                        thumbnail={image.Thumbnail}
                        width={1600}
                        height={1066}
                      >
                        {({ ref, open }) => (
                          <Image
                            style={{ height: "250px !important" }}
                            width={270}
                            height={250}
                            className="w-100 h-100 cover"
                            ref={ref}
                            onClick={open}
                            role="button"
                            src={image.Thumbnail}
                            alt={image.alt}
                          />
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
