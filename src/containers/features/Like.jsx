import React from "react";
import './like.css'
import eth1 from "../../assets/eth1.png";
import eth2 from "../../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1"  width={50} height={50}/>
          </div>
          <h2 className="title">Unbeatable Selection</h2>
          <p className="description">
          From sleek sneakers to elegant heels, we have got the styles to suit every taste and occasion.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" width={50} height={50}/>
          </div>
          <h2 className="title">Quality Craftsmanship</h2>
          <p className="description">
          Our shoes are crafted with precision and care, using premium materials to ensure durability and comfort with every step.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth1" width={50} height={50}/>
          </div>
          <h2 className="title">Fashion Forward</h2>
          <p className="description">
          Stay ahead of the curve with our curated collection of the latest trends and timeless classics.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" width={50} height={50}/>
          </div>
          <h2 className="title">Personalized Service</h2>
          <p className="description">
          Our friendly staff is here to help you find the perfect fit, ensuring you leave feeling confident and stylish.
          </p>
        </div>
      </div>
    </div>
  );
}
