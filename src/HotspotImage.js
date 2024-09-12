import React from 'react';
import PropTypes from 'prop-types';

const HotspotImage = ({ src, hotspots }) => {
  return (
    <div className="relative">
      <img src={src} alt="Hotspot" className="w-full h-auto object-cover" />
      {hotspots.map((hotspot, index) => (
        <div
          key={index}
          className="absolute cursor-pointer group"
          style={{
            top: `${hotspot.top}%`,
            left: `${hotspot.left}%`,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="tooltip opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {hotspot.tooltip}
          </div>
        </div>
      ))}
    </div>
  );
};

HotspotImage.propTypes = {
  src: PropTypes.string.isRequired,
  hotspots: PropTypes.arrayOf(
    PropTypes.shape({
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      tooltip: PropTypes.string,
    })
  ).isRequired,
};

export default HotspotImage;
