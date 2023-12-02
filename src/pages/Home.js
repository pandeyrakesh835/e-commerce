import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "./BlogCard";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner  p-3 ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="img"
                />
                <div className="main-banner-content position-absolute">
                  <h5>SUPERCHARGE FOR PROS</h5>
                  <h6>ipad S13+ Pro</h6>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative  py-2 ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>BEST SALE</h5>
                    <h6>Laptop Max</h6>
                    <p>
                      From $1699.00 or
                      <br /> $64.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  py-3 ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>NEW ARRIVAL</h5>
                    <h6>Buy IPad Air</h6>
                    <p>
                      From $599 or
                      <br /> $49.91/mo for 12 mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>15% OFF</h5>
                    <h6>Smartwatch 7</h6>
                    <p>
                      Shop the latest brand
                      <br />
                      Style and colors
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative   ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="img"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>FREE ENGRAVING</h5>
                    <h6>AirPods Max</h6>
                    <p>
                      High-fidelity plaback &<br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between ">
                <div className="d-flex align-item-center gap-10 ">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all order over $5</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-10 ">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily Surprice Offers </h6>
                    <p>Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-10 ">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p>Shop with a expert</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-10 ">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-item-center gap-10 ">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className=" categories d-flex justify-content-center flex-wrap  align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camras" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camras" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart wathes</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch.jpg" alt="camras" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camras" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camras" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camras" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart wathes</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/watch.jpg" alt="camras" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camras" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="w-25 mx-4">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="w-25 mx-4">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Feature Collections</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
