import React from 'react';

function Header() {
  return (
    <>
      <header className="header">
        <div className="hero-photo">
          <div className="title-card">
            <h1>DreamVillas</h1>
            <h2>Let us Guide you Home</h2>
            <button className="small-btn">
              Discover Your Future Residence
            </button>
          </div>
        </div>
        <div className="hero-title-card"></div>
      </header>
      <h1 className="large-titles large-titles-hero">
        We craft the <br />
        future dwelling.
      </h1>
    </>
  );
}

export default Header;
