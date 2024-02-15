import React from 'react';
import couch from '../images/couch-image.jpg';
import livingroom from '../images/living-room.jpg';
import couple from '../images/couple.jpg';

function About() {
  return (
    <div className="two-col-grid">
      <div>
        <img src={couch} alt="couch" />
      </div>

      <div>
        <img src={livingroom} alt="living room" />
      </div>
      <div className="about-content two-row-grid">
        <h2>Making Beautiful Spaces</h2>
        <p>
          DreamVillas is dedicated to helping clients find and build their dream
          homes. With years of experience in the industry, we have established a
          reputation for providing top-notch services that are tailored to meet
          your unique needs.
        </p>
        <p>
          We pride ourselves on offering a wide range of real estate services,
          including property management, buying and selling of properties, and
          rental services. Our team of highly trained and experienced
          professionals works diligently to ensure that every client receives
          personalized attention and exceptional service throughout the entire
          real estate process. We are committed to helping you achieve your real
          estate goals.
        </p>
      </div>

      <div className="dream-container">
        <div className="about-content dream-content">
          <div className="center-text">
            <h2>Living the Dream</h2>
            <p>
              The design for this client&apos;s <q>dream house on the water</q>{' '}
              capitalizes on every opportunity to incorporate views of the Long
              Island Sound within the home. The placement and expanse of the fir
              windows and sliding doors underscore the water&apos;s proximity.
            </p>
          </div>
        </div>
      </div>
      <div className="about-content">
        <h2>Dreams Made Possible</h2>
        <p>
          We understand that buying or selling a property can be a daunting
          task, but with our expertise and commitment to excellence, we make the
          process seamless and stress-free for our clients. Our team of
          experienced agents is dedicated to helping clients achieve their real
          estate goals by providing them with the knowledge and resources they
          need to make informed decisions. Whether you are a first-time
          homebuyer or a seasoned investor, we have the expertise and experience
          to get you the results you deserve.
        </p>
      </div>
      <div>
        <img src={couple} alt="couple" />
      </div>
    </div>
  );
}

export default About;
