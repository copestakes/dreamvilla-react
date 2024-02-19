import React, { useState } from 'react';
import Homes from './Homes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Listings() {
  return (
    <div className="listings-container">
      <h1 className="section-titles">Featured Properties</h1>
      <div className="listing-cards">
        {Homes.map((home) => (
          <div key={home.id} className="home-items">
            <p className="home-listing">{home.tag}</p>
            <FontAwesomeIcon icon={faHeart} className={'home-heart'} />
            <img src={home.image} alt="" />
            <h2 className="listing-card-location">{home.location}</h2>
            <div className="home-content">
              <div className="home-content-description">
                <div className="heading"></div>
                <h1>{home.title}</h1>
                <div className="home-price">
                  <h3>{home.style}</h3>
                  <h2>{home.price}</h2>
                </div>
                <div className="home-accommodations">
                  <p>
                    {home.bed}
                    <span>
                      <FontAwesomeIcon icon={faBed} />
                    </span>
                    Bed
                  </p>
                  <p>
                    {home.bath}
                    <span>
                      <FontAwesomeIcon icon={faBath} />
                    </span>
                    Bath
                  </p>
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
