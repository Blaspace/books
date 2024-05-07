import React from "react";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-con">
        <div className="socials">
          <FaLinkedin size={30} color="lightgrey" />
          <FaSquareInstagram size={30} color="lightgrey" />
          <FaFacebookSquare size={30} color="lightgrey" />
        </div>
        <br />
        <p>School for children with special need, Kuje Abuja</p>
        <br />
        <div className="contact">
          <p>
            <b>
              <IoMdCall size={20} /> +234-816-653-3430
            </b>
          </p>
          <p>
            <b>
              <MdEmail size={20} /> ngbedejames415@gmail.com
            </b>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
