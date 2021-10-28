import React from "react";
import SelectForm from "./SelectForm";
import Skills from "./Skills";

const Container = ({ setFormData, formData }) => {
  const handleChange = (e) => {
    let selectedSkills = [];

    for (let i = 0; i < skills.length; i++) {
      if (skills[i].children[0].checked) {
        selectedSkills.push(skills[i].children[0].value);
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      skills: selectedSkills,
    });
  };

  const handleReset = () => {
    for (let i = 0; i < skills.length; i++) {
      if (skills[i].children[0].checked) {
        skills[i].children[0].checked = false;
      }
    }

    setFormData({
      ...formData,
      skills: [],
    });
  };

  return (
    <>
      <form className="formForm" id="formForm" onChange={handleChange}>
        <div className="formRows">
          <SelectForm formData={formData} />
          <div className="lineBreak"></div>
          <Skills formData={formData} />
        </div>
        <input type="button" onClick={handleReset} value="Reset Skills"></input>
      </form>
    </>
  );
};
export default Container;
