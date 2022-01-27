import React from "react";
import aaronJamesImage from '../styles/images/aaron-james.jpeg'

const AboutMe = () => {
  return (
    <section>
      <div className="about-me-image">
          <img src={aaronJamesImage} alt="aaron-james" id="about-me-jpeg" />
      </div>
      <div className="about-me-container">
      <div className="about-me-text">
        <article className="about-me-article">
          <h2  className="title-font tier-two about-me-writing">My experiences</h2>
          <p className="default-font about-me-writing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum malesuada ipsum, luctus ultrices felis finibus sit amet.
            Donec commodo, diam at porttitor dapibus, erat neque rhoncus sem, ac
            vehicula arcu elit eget leo. Duis porttitor, nisi pulvinar tincidunt
            tristique, sem turpis rutrum mauris, nec vestibulum dui lectus non
            mauris. Suspendisse sed vulputate lacus, vel laoreet risus. Integer
            non imperdiet magna. Nullam tempus auctor porta. Integer iaculis
            arcu eu odio tincidunt rutrum. Aliquam pretium sapien ac erat
            tristique, eget volutpat tortor luctus. Nam gravida scelerisque
            ipsum, nec dignissim lectus pulvinar varius.
          </p>
        </article>
        <article className="about-me-article">
          <h2 className="title-font tier-two about-me-writing">What motivates me?</h2>
          <p className="default-font about-me-writing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum malesuada ipsum, luctus ultrices felis finibus sit amet.
            Donec commodo, diam at porttitor dapibus, erat neque rhoncus sem, ac
            vehicula arcu elit eget leo. Duis porttitor, nisi pulvinar tincidunt
            tristique, sem turpis rutrum mauris, nec vestibulum dui lectus non
            mauris. Suspendisse sed vulputate lacus, vel laoreet risus. Integer
            non imperdiet magna. Nullam tempus auctor porta. Integer iaculis
            arcu eu odio tincidunt rutrum. Aliquam pretium sapien ac erat
            tristique, eget volutpat tortor luctus. Nam gravida scelerisque
            ipsum, nec dignissim lectus pulvinar varius.
          </p>
        </article>
        <article className="about-me-article">
          <h2 className="title-font tier-two about-me-writing">My poetry is for who?</h2>
          <p className="default-font about-me-writing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum malesuada ipsum, luctus ultrices felis finibus sit amet.
            Donec commodo, diam at porttitor dapibus, erat neque rhoncus sem, ac
            vehicula arcu elit eget leo. Duis porttitor, nisi pulvinar tincidunt
            tristique, sem turpis rutrum mauris, nec vestibulum dui lectus non
            mauris. Suspendisse sed vulputate lacus, vel laoreet risus. Integer
            non imperdiet magna. Nullam tempus auctor porta. Integer iaculis
            arcu eu odio tincidunt rutrum. Aliquam pretium sapien ac erat
            tristique, eget volutpat tortor luctus. Nam gravida scelerisque
            ipsum, nec dignissim lectus pulvinar varius.
          </p>
        </article>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
