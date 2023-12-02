import React from "react";
import { Link } from "react-router-dom";
import {BsGithub, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5 d-flex gap-30">
              <div className="footer-top-data d-flex  align-item-center text-white"></div>

              <img src="images/newsletter.png" alt="news" />
              <h5 className="mb-0 text-white">Sign Up for NewsLatter </h5>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h6 className="text-white">Contect</h6>
              <div>
              <address className="text-white">
              H No: 254 near vill greter noida<br/>Utter Pradesh<br/>PinCode: 131412 
              </address>
              <a href="+91 9125255656" className=" address-a mb-3 d-block mt-4 text-white">+91 9125565625</a>
              <a href="rakeshpandey@gmail.com" className="address-a mb-3 d-block mt-4 text-white">rakeshpandey@gmail.com</a>
              <div className="social-icon d-flex align-items-center text-white">
              <a href="#">
              <BsLinkedin className="text-white fs-5"/>
              </a>
              <a href="#">
              <BsInstagram className="text-white fs-5"/>
              </a>
              <a href="#">
              <BsGithub className="text-white fs-5"/>
              </a>
              <a href="#">
              <BsYoutube className="text-white fs-5"/>
              </a>
              
              </div>
              </div>
            </div>
            <div className="col-3">
              <h6 className="text-white">Information</h6>
              <div className="footer-link d-flex flex-column align-items-center ">
              <Link className="text-white py-2 mb-1 ">Privecy Policy</Link>
              <Link className="text-white py-2 mb-1 ">Refund Policy</Link>
              <Link className="text-white py-2 mb-1 ">Shoping Policy</Link>
              <Link className="text-white py-2 mb-1 ">Term Of Service</Link>
              <Link className="text-white py-2 mb-1 ">Blogs</Link>
            </div>
            </div>
            <div className="col-3">
              <h6 className="text-white">Account</h6>
              <div className="footer-link d-flex flex-column align-items-center ">
              <Link className="text-white py-2 mb-1 ">Search</Link>
              <Link className="text-white py-2 mb-1 ">About</Link>
              <Link className="text-white py-2 mb-1 ">Feq</Link>
              <Link className="text-white py-2 mb-1 ">Contact</Link>
              <Link className="text-white py-2 mb-1 ">Show Cart</Link>
            
            </div>
            </div>
            <div className="col-2">
              <h6 className="text-white">Quick Link</h6>
              <div className="footer-link d-flex flex-column align-items-center ">
                <Link className="text-white py-2 mb-1 ">Assocciries</Link>
                <Link className="text-white py-2 mb-1 ">Laptop</Link>
                <Link className="text-white py-2 mb-1 ">Headphones</Link>
                <Link className="text-white py-2 mb-1 ">Tablets</Link>
                <Link className="text-white py-2 mb-1 ">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy: {new Date().getFullYear()}; Powered By Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
