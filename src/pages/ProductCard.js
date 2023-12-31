import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
      <div className="wish-listicon position-relative">
      <Link > <img src="images/wish.svg" alt="wish"/></Link>
      </div>
        <div className="product-image">
          <img src="images/watch.jpg" className="img-fluid" alt="images" />
          <img src="images/watch-1.jpg" className="img-fluid" alt="images" />
        </div>
        <div className="product-detals">
          <h6 className="brand"> Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for student
          </h5>
          <ReactStars
          count={5}
          size={24}
          value="3"
          edit={false}
          activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
        <Link>
          <img src="images/prodcompare.svg"  alt="addcart" />
        </Link>
        <Link>
          <img src="images/view.svg"  alt="addcart" />
        </Link>
        <Link>
          <img src="images/add-cart.svg"  alt="addcart" />
        </Link>
        
      </div>
   
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
