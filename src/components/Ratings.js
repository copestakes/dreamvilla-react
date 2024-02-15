import React from 'react';

function Ratings() {
  return (
    <div>
      <h1 className="large-titles">
        We're with you <br />
        every step of the way!
      </h1>
      <div className="rating-section">
        <div className="rating-card">
          <h1>30+</h1>
          <p>Service Awards</p>
        </div>

        <div className="rating-card">
          <h1>5000+</h1>
          <p>Homes for Sale</p>
        </div>

        <div className="rating-card">
          <h1>2000+</h1>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
