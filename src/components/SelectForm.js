import React from "react";

const SelectForm = ({ formData }) => {
  const tierList = () => {
    const list = [];
    let i = 1;

    while (i < 10) {
      list.push(
        <option value={[i]} key={[i]}>
          {[i]}
        </option>
      );
      i++;
    }
    return <>{list}</>;
  };

  const correctLevel = () => {
    if (+formData.rawLevel > 0 && +formData.rawLevel < 31) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="submitRow">
      <div className="selectors">
        <h3>Tier</h3>
        <select
          className={
            formData.tierLevel === "" ? "formInputField" : "validFormInput"
          }
          name="tierLevel"
        >
          <option value="" defaultValue>
            Select a value
          </option>
          {tierList()}
        </select>
      </div>

      <div className="selectors">
        <h3>Level</h3>
        <input
          className={correctLevel() ? "formInputField" : "validFormInput"}
          type="number"
          name="rawLevel"
        />
      </div>

      <div className="selectors">
        <h3>Gender</h3>
        <div
          className={
            formData.gender === "" ? "formInputField" : "validFormInput"
          }
        >
          <input id="genderMale" type="radio" name="gender" value="m" />
          <label htmlFor="genderMale">Male</label>
          <input id="genderFemale" type="radio" name="gender" value="f" />
          <label htmlFor="genderFemale">Female</label>
        </div>
      </div>

      <div className="selectors">
        <h3>Breedings Remaining</h3>
        <select
          className={
            formData.breedings === "" ? "formInputField" : "validFormInput"
          }
          name="breedings"
        >
          <option value="" defaultValue>
            Select a value
          </option>
          <option value="0">0</option>
          <option value="1">1</option>
          {formData.gender === "m" && <option value="2">2</option>}
        </select>
      </div>

      <div className="selectors">
        <h3>Reset Available</h3>
        <div
          className={
            formData.reset === "" ? "formInputField" : "validFormInput"
          }
        >
          <input id="resetYes" type="radio" name="reset" value="y" />
          <label htmlFor="resetYes">Yes</label>
          <input id="resetNo" type="radio" name="reset" value="n" />
          <label htmlFor="resetNo">No</label>
        </div>
      </div>

      <div className="selectors">
        <h3>Courser</h3>
        <div
          className={
            formData.courser === "" ? "formInputField" : "validFormInput"
          }
        >
          <input id="courserYes" type="radio" name="courser" value="y" />
          <label htmlFor="courserYes">Yes</label>
          <input id="courserNo" type="radio" name="courser" value="n" />
          <label htmlFor="courserNo">No</label>
        </div>
      </div>
    </div>
  );
};

export default SelectForm;
