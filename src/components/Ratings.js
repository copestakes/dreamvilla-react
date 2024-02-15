import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';

function Ratings() {
  return (
    <div>
      <h1 className="large-titles">
        We're with you <br />
        every step of the way!
      </h1>
      <div className="rating-section">
        <div className="rating-card">
          <FontAwesomeIcon className="rating-icon" icon={faAward} />
          <h1>30+</h1>
          <p>Service Awards</p>
        </div>

        <div className="rating-card">
          <FontAwesomeIcon className="rating-icon" icon={faHouseChimney} />
          <h1>5000+</h1>
          <p>Homes for Sale</p>
        </div>

        <div className="rating-card">
          <FontAwesomeIcon className="rating-icon" icon={faFaceSmileWink} />
          <h1>2000+</h1>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
