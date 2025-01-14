import React from 'react';

function MarqueeHomeOne({ className }) {
    return (
        <>
          <section className={`marquee-section ${className || ''}`}>
            <div className="marquee">
              <div className="marquee-group">
                <div className="text">Electricity</div>
                <div className="text">Panels</div>
                <div className="text">Solar</div>
                <div className="text">Energy</div>
                <div className="text">Power</div>
                <div className="text">Panels</div>
              </div>
                        
              <div aria-hidden="true" className="marquee-group">
                <div className="text">Electricity</div>
                <div className="text">Panels</div>
                <div className="text">Solar</div>
                <div className="text">Energy</div>
                <div className="text">Power</div>
                <div className="text">Panels</div>
              </div>
            </div>
          </section>
        </>
    );
}

export default MarqueeHomeOne;
