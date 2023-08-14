import React from "react";
import './style.css';

import Sandwich from '../../components/Homepage/Sandwich.png'; 

const Homepage = () => {
  return (
    <div className="hero-section">
      <div class="section-one">
      <div className="hero-content">
        <h1>
          All Fast food <span className="orange-text">is</span> <br></br> available at foodle
        </h1>
        <h>
          We Are Just A Click Away When <span className="black-text">You</span> <br></br>Care For Delicious Fast Food
        </h>
        <button className="signup-button">Buy Now</button>
      </div>
      <div className="hero-image">
        <img src={Sandwich} alt="Sandwich" />
      </div>
      </div>


      <div class="Details">
      <div>
        <h1>Fast Delivery</h1>
        <p>The food will be delivered to <br></br>Your home within 1-2 hrs of<br></br>your ordering </p>
      </div>
      <div>
        <h1>Fresh Food</h1>
        <p>The food will be delivered to <br></br>Your home within 1-2 hrs of<br></br>your ordering </p>
      </div>
      <div>
        <h1>Free Delivery</h1>
        <p>The food will be delivered to <br></br>Your home within 1-2 hrs of<br></br>your ordering </p>
      </div>
      </div>





      
      <div class="section-one">
      <div class="content">
        <h1>
          Best <span Delivered class="orange"></span> <br></br> Categories
        </h1>
        <h id="words">
          Here are some of our best distributed categories.If you want you can order from here.
        </h>
      </div>
      </div>
      
      
      <div class="container">
    <div class="item">
      <img src={Sandwich} alt="Chicken"/>
      <div class="item-name">Chicken Burger</div>
      <button class="order-button">Order Now</button>
    </div>

    <div class="item">
      <img src={Sandwich} alt="Burger"/>
      <div class="item-name">Chicken Pizza</div>
      <button class="order-button">Order Now</button>
    </div>

    <div class="item">
      <img src={Sandwich} alt="Fries"/>
      <div class="item-name">French Fries</div>
      <button class="order-button">Order Now</button>
    </div>
  </div>
     
      <div class="section-two">
        <h1>
          Our <span className="orange-text">Regular</span> <br></br> Menu
        </h1>
        <div class="two">
        <h>
          These are our regular Menus.You can<br></br>order anything you like.
        </h>
        <button className="signup-button">See All</button>
        </div>
      </div>

      {/*rows section */}
      <div class="item">
    <img src={Sandwich} alt="Item 1"/>
    <div class="item-details">
      <div class="item-name">Item 1</div>
      <div class="item-rating">Rating: 4.5</div>
      <div class="item-price">$10.99</div>
      <button class="buy-button">Buy Now</button>
    </div>
  </div>

  <div class="item">
    <img src={Sandwich} alt="Item 2"/>
    <div class="item-details">
      <div class="item-name">Item 2</div>
      <div class="item-rating">Rating: 4.0</div>
      <div class="item-price">$8.49</div>
      <button class="buy-button">Buy Now</button>
    </div>
  </div>

  <div class="item">
    <img src={Sandwich} alt="Item 3"/>
    <div class="item-details">
      <div class="item-name">Item 3</div>
      <div class="item-rating">Rating: 4.8</div>
      <div class="item-price">$12.99</div>
      <button class="buy-button">Buy Now</button>
    </div>
  </div>

  <div class="item">
    <img src={Sandwich} alt="Item 1"/>
    <div class="item-details">
      <div class="item-name">Item 1</div>
      <div class="item-rating">Rating: 4.5</div>
      <div class="item-price">$10.99</div>
      <button class="buy-button">Buy Now</button>
    </div>
  </div>

  <div class="item">
    <img src={Sandwich} alt="Item 2"/>
    <div class="item-details">
      <div class="item-name">Item 2</div>
      <div class="item-rating">Rating: 4.0</div>
      <div class="item-price">$8.49</div>
      <button class="buy-button">Buy Now</button>
    </div>
  </div>

  <div class="item">
    <img src={Sandwich} alt="Item 3"/>
    <div class="item-details">
      <div class="item-name">Item 3</div>
      <div class="item-rating">Rating: 4.8</div>
      <div class="item-price">$12.99</div>
      <button class="buy-button">Buy Now</button>
    </div>
  </div>

  {/* third section */}

  <div class="flex-container">
    <div class="image-container">
      <img src={Sandwich} alt="Image 1"/>
    </div>
    <div class="image-container">
      <img src={Sandwich} alt="Image 2"/>
      <img src={Sandwich} alt="Image 3"/>
    </div>
  </div>
     
    </div>
  );
};
export default Homepage;