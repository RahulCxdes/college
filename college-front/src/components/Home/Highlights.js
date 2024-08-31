import React from 'react';
import './Highlights.css'; // Ensure you have this CSS file

function Highlights() {
  return (
    <div className="highlights-container">
      <div className="highlights-wrapper">
        <div className="highlight-item">Top 5 College in NIRF</div>
        <div className="highlight-item">98% Placement Rate</div>
        <div className="highlight-item">100+ Industry Collaborations</div>
        <div className="highlight-item">State-of-the-art Facilities</div>
        <div className="highlight-item">Innovative Research Initiatives</div>
        <div className="highlight-item">Global Alumni Network</div>
        {/* Duplicate the highlights for seamless looping */}
        <div className="highlight-item">Top 5 College in NIRF</div>
        <div className="highlight-item">98% Placement Rate</div>
        <div className="highlight-item">100+ Industry Collaborations</div>
        <div className="highlight-item">State-of-the-art Facilities</div>
        <div className="highlight-item">Innovative Research Initiatives</div>
        <div className="highlight-item">Global Alumni Network</div>
      </div>
    </div>
  );
}

export default Highlights;