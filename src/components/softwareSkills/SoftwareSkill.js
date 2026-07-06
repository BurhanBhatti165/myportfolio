import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <a 
                  href={skills.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="skill-link"
                  title={`Visit ${skills.skillName} official website`}
                >
                  <img 
                    src={skills.logo} 
                    alt={`${skills.skillName} logo`}
                    className="skill-logo"
                  />
                  <p>{skills.skillName}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
