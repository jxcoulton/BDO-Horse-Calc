import React, { useState } from "react";
import skillsData from "../skillsData";
import SelectForm from "./SelectForm";
import Skills from "./Skills";

const Container = ({ setFormData, formData }) => {
	const handleChange = (e) => {
		let selectedSkills = [];

		for (let i = 0; i < skills.length; i++) {
			if (skills[i].checked) {
				selectedSkills.push(skills[i].value);
			}
		}
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			skills: selectedSkills,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="fullFormField">
			<form className="formForm" id="formForm" onChange={handleChange}>
				<div className="formRows">
					<SelectForm formData={formData} />
					<Skills formData={formData} />
				</div>
				{/* <button type="submit" onClick={handleSubmit}>
					Submit
				</button> */}
				<button
					type="onSubmit"
					onClick={() => {
						e.reset();
					}}
				>
					Reset
				</button>
			</form>
		</div>
	);
};
export default Container;
