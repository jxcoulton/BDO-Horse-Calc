import React from "react";
import skillsData from "../database/skillsData";

const Skills = ({ formData }) => {
  const skillsList = (obj) => {
    const list = [];

    obj.forEach((item) => {
      item.tier <= formData.tierLevel &&
        list.push(
          <li id="skills" key={item.id} name={item.name}>
            <input id={item.name} type="checkbox" value={item.name} />
            <label htmlFor={item.name}>
              <img src="https://grumpygreen.cricket/old-site/images/dark-sprint.png" />
              {item.name}
            </label>
          </li>
        );
    });
    return <>{list}</>;
  };

  return (
    <div className="skillsForm">
      {console.log(skillsData[0].image)}
      {!formData.tierLevel ? (
        <h3 id="skills">Select Tier for skills</h3>
      ) : (
        skillsList(skillsData)
      )}
    </div>
  );
};

export default Skills;
