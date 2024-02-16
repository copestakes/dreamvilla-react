import React from 'react';
import TestimonialInfo from './Testimonial-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Testimonials() {
  // const stars = <FontAwesomeIcon icon={faStar} />;
  const numberOfStars = 4;
  return (
    <div className="testimonial-section">
      <h2> What our customers say!</h2>
      <div className="testimonal-card">
        {TestimonialInfo.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-items">
            <span>
              {[...Array(numberOfStars)].map((_, index) => (
                <FontAwesomeIcon icon={faStar} key={index} />
              ))}
            </span>
            <p>{testimonial.statement}</p>
            <h2>{testimonial.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
