import React from "react";

function SelectForm({ formData }) {
	const breedingFemaleSelection = () => {
		if (formData.gender === "m") {
			return <option value="2">2</option>;
		}
	};

	return (
		<div className="submitRow">
			<div className="selectors">
				<h3>Tier</h3>
				<select id="tier" name="tierLevel">
					<option value="" defaultValue>
						Select a value
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
				</select>
			</div>
			<div className="selectors">
				<h3>Level</h3>
				<input
					id="level"
					type="number"
					min="1"
					max="30"
					name="rawLevel"
				></input>
			</div>
			<div className="selectors">
				<h3>Gender</h3>
				<p>
					<input id="radioButton" type="radio" name="gender" value="m"></input>
					Male
				</p>
				<p>
					<input id="radioButton" type="radio" name="gender" value="f"></input>
					Female
				</p>
			</div>
			<div className="selectors">
				<h3>Breedings Remaining</h3>
				<select id="breedings" name="breedings">
					<option value="" defaultValue>
						Select a value
					</option>
					<option value="0">0</option>
					<option value="1">1</option>
					{breedingFemaleSelection()}
				</select>
			</div>
			<div className="selectors">
				<h3>Reset Available</h3>
				<p>
					<input id="radioButton" type="radio" name="reset" value="n"></input>
					No
				</p>
				<p>
					<input id="radioButton" type="radio" name="reset" value="y"></input>
					Yes
				</p>
			</div>
			<div className="selectors">
				<h3>Courser</h3>
				<p>
					<input id="radioButton" type="radio" name="courser" value="n"></input>
					No
				</p>
				<p>
					<input id="radioButton" type="radio" name="courser" value="y"></input>
					Yes
				</p>
			</div>
		</div>
	);
}

export default SelectForm;
