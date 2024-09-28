import React from 'react';
import Activity from './Activity';
import './Section.css';

const Section = ({ title, activities }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="activities-container">
        <div className="activities">
          {activities.map((activity, index) => (
            <Activity key={index} name={activity.name} image={activity.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
