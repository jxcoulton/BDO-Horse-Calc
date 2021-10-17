import React from "react";
import skillsData from "../skillsData";

function Skills({ formData }) {
	console.log(formData);
	const skillsList = (obj) => {
		let list = [];
		for (let i = 0; i < obj.length; i++) {
			if (formData.tierLevel === "") {
				return <h3 id="skills">Select a Tier for a list of skills</h3>;
			} else if (obj[i].tier <= formData.tierLevel) {
				list.push(
					<li key={obj[i].id}>
						<input
							id="skills"
							type="checkbox"
							name="skills"
							label={obj[i].name}
							value={obj[i].name}
						></input>
						<label htmlFor={obj[i].name}>{obj[i].name}</label>
					</li>
				);
			}
		}
		return <div>{list}</div>;
	};

	return <>{skillsList(skillsData)}</>;
}

export default Skills;
