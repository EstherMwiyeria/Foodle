import React from "react";
import './style.css';


const Footer = () => {
    return (
<div class="footer">
    <div class="container">
      <div class="section">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Chicken</a></li>
          <li><a href="#">Burger</a></li>
          <li><a href="#">Pizza</a></li>
          
        </ul>
      </div>
      <div class="section">
        <h2>Information</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Privacy Policy</a></li>
       
        </ul>
      </div>
      <div class="section">
        <h2>Contact</h2>
        <ul>
          <li>Email: info@foodle.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 1234 Street, City</li>
          
        </ul>
      </div>
    </div>
    <div class="contact">
      <p>&copy; 2023 Foodle. All rights reserved.</p>
    </div>
  </div>

    );
};

export default Footer; 