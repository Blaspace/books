import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            At YeshuaBooks, we provide a vast collection of Christian books to
            inspire and nurture your faith. Join our community and explore our
            extensive library.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="../">Home</a>
            </li>
            <li>
              <a href="/category">Categories</a>
            </li>
            <li>
              <a href="/authors">Authors</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +234 816 653 3430</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com/groups/479177554658094/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Theyeshuabooks. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
