import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    date: "2019",
    title: "10th ",
    description: "Completed 10th at 76.2%",
    accentColor: "#41516C"
  },
  {
    date: "2021",
    title: "12th ",
    description: "Completed 12th at 84.96",
    accentColor: "#FBCA3E"
  },
  {
    date: "2021",
    title: "BE CSE",
    description: "Pursuing BE final year in KEC ",
    accentColor: "#E24A68"
  },
  
];

const Timeline = () => {
  return (
    <div className='box'>
      <ul className="timeline">
        {timelineData.map((item, index) => (
          <li key={index} style={{ "--accent-color": item.accentColor }}>
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
            <div className="descr">{item.description}</div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Timeline;
