import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <section>
        <h2 className="nav-header main-font"><Link to="/">Aaron James Books</Link></h2>
        <ul className="nav-list">
            <li className="nav-item main-font"><Link to="/about-me">About Me</Link>
            </li>
            <li className="nav-item main-font"><Link to="/shop">Shop</Link></li>
            <li className="nav-item main-font"><Link to="/gallery">Gallery</Link></li>
            <li className="nav-item main-font"><Link to="/blog">Blog</Link></li>
            <li className="nav-item main-font"><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        </section>
    )
}

export default Nav