import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="main-font">Website designed by Aaron James</h2>
      <section className="social-media">
        <div id="facebook">
          <a href="https://www.facebook.com/aaronjamesbooks/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="facebook logo"
              className="social-icon"
            />
          </a>
        </div>
        <div id="instagram">
        <a href="https://www.instagram.com/aaronjamespoet/?hl=en" target="_blank" rel="noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt="instagram logo"
            className="social-icon"
          />
          </a>
        </div>
        <div id="twitter">
        <a href="https://twitter.com/aaronjamespoet" target="_blank" rel="noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            alt="twitter logo"
            className="social-icon"
          />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
