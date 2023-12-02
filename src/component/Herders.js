import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Herders = () => {
  return (
    <>
      <header className="header-top-strip py-2 ">
        <div className="container-xxl ">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="text-white mb-0 fs-6">
                Free Shoping Over $100 & Free Return
              </p>
            </div>
            <div className="col-6 text-end ">
              <p className="text-white mb-1 fs-6">
                Hotline:{" "}
                <a className="text-white " href="+91 9934525252">
                  +91 9934525252
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-end">
              <h4>
                <Link className="text-white">Developer.</Link>
              </h4>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Search Product Hare..."
                  aria-label="Search Product Hare..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-6 m-1" />
                </span>
              </div>
            </div>
            <div className="col-5 justify-content-lg-start">
              <header className="header-uper-link d-flex align-content-center justify-content-between">
                <div className="svg_class">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="" />
                    <p className="font mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div className="svg_class">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="" />
                    <p className="font mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="" />
                    <p className="font mb-0">
                      Log in <br /> Account
                    </p>
                  </Link>
                </div>
                <div className="svg_class">
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="" />
                    <div className="d-flex flex-column ">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0 font">$500</p>
                    </div>
                  </Link>
                </div>
              </header>
            </div>
          </div>
        </div>
      </header>
      <header className="header-botton p-1 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-botton d-flex align-items-center">
                <div>
                  <div className="dropdown ">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-content-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    <img src="images/menu.svg" alt="img"/>
                  <span>Shop Category</span>   
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="/ ">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/ ">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/ ">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-link">
                  <div className="d-flex align-content-end gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/ourstore">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Herders;
