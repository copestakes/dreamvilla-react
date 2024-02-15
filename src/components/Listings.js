import React from 'react';
import Homes from './Homes';

function Listings() {
  return (
    <div className="listings-container">
      <h1 className="section-titles">Featured Properties</h1>
      <div className="listing-cards">
        {Homes.map((home) => (
          <div key={home.id} className="home-items">
            <img src={home.image} alt="" />
            <div className="home-content">
              <div className="home-content-description">
                <div className="heading">
                  <h2>{home.location}</h2>
                </div>
                <div className="home-price">
                  <ph3>{home.style}</ph3>
                  <h2>{home.price}</h2>
                </div>
                <h1>{home.title}</h1>
                <div className="home-accommodations">
                  <p>{home.bed} bedrooms</p>
                  <p>{home.bath} bathrooms</p>
                  <p>{home.sqft} SqFt</p>
                </div>
                <button className="small-btn">Explore this property</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
