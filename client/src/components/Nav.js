import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="nav">
      <div className="nav-top-container">
        <h1 className="nav-header title-font">
          <Link to="/" className="tier-one link">
            Aaron James
          </Link>
        </h1>
        <p className="tier-two title-font">Writer, poet, activist.</p>
      </div>
      {/* <div className="pan-african red"></div>
      <div className="pan-african black"></div>
      <div className="pan-african green"></div> */}
      <ul className="nav-list">
        <li className="nav-item title-font">
          <Link to="/about-me" className="link">About Me</Link>
        </li>
        <li className="nav-item title-font">
          <Link to="/shop" className="link">Shop</Link>
        </li>
        <li className="nav-item title-font">
          <Link to="/gallery" className="link">Gallery</Link>
        </li>
        <li className="nav-item title-font">
          <Link to="/blog" className="link">Blog</Link>
        </li>
        <li className="nav-item title-font">
          <Link to="/contact-us" className="link">Contact Us</Link>
        </li>
      </ul>
      <div className="nav-banner-container">
          <div className="nav-banner green"></div>
          <div className="nav-banner yellow"></div>

      </div>
    </section>
  );
};

export default Nav;
