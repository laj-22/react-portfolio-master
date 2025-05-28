import React, { useState } from 'react';
import './Timeline.css';
import { worktimeline } from '../../content_option';
import { FaCheck } from 'react-icons/fa';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(null);

  const extractYear = (dateString) => {
    const yearMatch = dateString.match(/\d{4}/);
    return yearMatch ? yearMatch[0] : '';
  };

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {worktimeline.map((item, index) => (
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${activeItem === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <div className="timeline-year">{extractYear(item.date)}</div>
            <div className="timeline-marker">
              <FaCheck />
            </div>
            <div className="timeline-content">
              <h3>{item.jobtitle}</h3>
              <h4>{item.where}</h4>
              <p className="timeline-date">{item.date}</p>
              {activeItem === index && (
                <>
                  <p className="timeline-description">{item.description}</p>
                  <ul className="timeline-achievements">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 