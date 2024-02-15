import React from 'react';
import logo from '../images/dreamvillas-logo.svg';

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo" />
          <ul>
            <li>
              Address: <br /> 1001 Walnut Street, Philadephia PA
            </li>
            <li>
              Phone: <br /> 1.800.555.1122
            </li>

            <li>
              Email: <br /> dreamhome@dreamvillas.com
            </li>
          </ul>
        </div>

        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Property</a>
            </li>
            <li>
              <a href="/">Listed</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
