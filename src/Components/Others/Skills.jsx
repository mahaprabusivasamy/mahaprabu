// Skills.jsx

import React, { useState, useEffect } from 'react';
import "./Skills.css"
const skills = [
  { type: "HTML", level: 95 },
  { type: "CSS", level: 90 },
  { type: "JavaScript", level: 80 },
  { type: "React", level: 80 },
  { type: "BootStrap", level: 50 },
  { type: "express", level: 25 },
  { type: "PHP", level: 36 },
  { type: "devops", level: 11 }
];

const Skills = ({ hue, saturation }) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
      <h1 className='skills_name'>Skills</h1>
      <hr />
      <ul className="skills">
        {skills.map((skill, index) => (
          <li
            key={skill.type}
            style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5)}%)` }}
          >
            <p className='p_skills'>{skill.type}<span>{skill.level}%</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
