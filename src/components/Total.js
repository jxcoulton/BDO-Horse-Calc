import React from "react";
import pricePerLevelTier from "../pricePerLevelTier";
import baseValueData from "../baseValue.js";
import skillsData from "../skillsData";

function Total({ formData }) {
	const baseTierValue = () => {
		for (let i = 0; i < baseValueData.length; i++) {
			if (baseValueData[i].tier === +formData.tierLevel) {
				return baseValueData[i].value;
			}
		}
	};

	const levelValue = () => {
		for (let i = 0; i < pricePerLevelTier.length; i++) {
			if (pricePerLevelTier[i].tier === +formData.tierLevel) {
				return pricePerLevelTier[i].value * +formData.rawLevel;
			}
		}
	};

	const genderMod = () => {
		if (formData.gender === "m") {
			return 1;
		} else if (formData.gender === "f") {
			return 1.2;
		} else {
			return "";
		}
	};

	const breedMod = () => {
		if (formData.breedings === "0") {
			return 0.75;
		} else if (formData.breedings === "1" && formData.gender === "m") {
			return 0.88;
		} else if (formData.breedings === "1" && formData.gender === "f") {
			return 1;
		} else if (formData.breedings === "2" && formData.gender === "f") {
			return "";
		} else if (formData.breedings === "2") {
			return 1;
		} else {
			return "";
		}
	};

	const resetMod = () => {
		if (formData.reset === "y") {
			return 1;
		} else if (formData.reset === "n") {
			return 0.8;
		} else {
			return "";
		}
	};

	const courserMod = () => {
		if (formData.courser === "y") {
			return 3.6;
		} else if (formData.courser === "n") {
			return 1;
		} else {
			return "";
		}
	};

	const tierMod = () => {
		return +formData.tierLevel * 0.3;
	};

	const totalCheckedSkills = () => {
		let totalSkillValue = 0;
		for (let j = 0; j < formData.skills.length; j++) {
			for (let i = 0; i < skillsData.length; i++) {
				if (skillsData[i].name === formData.skills[j]) {
					totalSkillValue += skillsData[i].value;
				}
			}
		}
		return totalSkillValue;
	};

	const totalSalePrice = () => {
		return (
			((baseTierValue() + levelValue()) *
				genderMod() *
				breedMod() *
				resetMod() +
				totalCheckedSkills() * tierMod()) *
			courserMod()
		);
	};

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	}

	const finalValue = () => {
		if (!totalSalePrice() >= 1) {
			return "Please enter all values in the first column";
		} else {
			return `Selling price is around $${numberWithCommas(
				Math.round(totalSalePrice())
			)}`;
		}
	};

	return (
		<>
			<h1>{finalValue()}</h1>
			{/* <h1>{totalCheckedSkills()}</h1>
			<h3>
				base value:{baseTierValue()}, level value:{levelValue()}, Gender mod:
				{genderMod()}, Breed Mod: {breedMod()}, Reset Mod: {resetMod()}, Courser
				Mod: {courserMod()}, tier Mod: {tierMod()}
			</h3> */}
		</>
	);
}

export default Total;
